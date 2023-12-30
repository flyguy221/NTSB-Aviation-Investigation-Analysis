#!/usr/bin/env python
# coding: utf-8

# In[19]:


import pandas as pd
import requests
import zipfile
import os

def correct_erroneous_rows(df):
    # Identify and drop extra columns
    columns_to_drop = ['lchg_date', 'lchg_userid'] + [col for col in df.columns if 'Unnamed' in col]
    df.drop(columns=columns_to_drop, inplace=True)

    # Correct erroneous rows
    required_columns = ['ev_id', 'Aircraft_Key', 'narr_accp', 'narr_accf', 'narr_cause', 'narr_inc']
    drop_indices = []
    for index in range(len(df) - 1, 0, -1):
        if not str(df.iloc[index]['ev_id']).startswith('20'):
            concatenated_text = ' '.join(df.iloc[index - 1][required_columns].fillna('').astype(str)) + ' ' + \
                                ' '.join(df.iloc[index].fillna('').astype(str))
            df.at[index - 1, 'narr_accp'] = concatenated_text
            drop_indices.append(index)

    df.drop(drop_indices, inplace=True)
    df.reset_index(drop=True, inplace=True)
    return df

def process_narratives(df):
    df_corrected = correct_erroneous_rows(df)
    df_corrected['narr_complete'] = df_corrected['narr_accp'].fillna('') + ' ' + \
                                    df_corrected['narr_accf'].fillna('') + ' ' + \
                                    df_corrected['narr_cause'].fillna('') + ' ' + \
                                    df_corrected['narr_inc'].fillna('')
    df_corrected.drop(['narr_accp', 'narr_accf', 'narr_cause', 'narr_inc'], axis=1, inplace=True)

    return df_corrected

def download_and_process_narratives(zip_url, extract_path):
    response = requests.get(zip_url)

    if response.status_code == 200:
        zip_file_path = os.path.join(extract_path, 'narratives.zip')
        with open(zip_file_path, 'wb') as file:
            file.write(response.content)

        with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
            zip_ref.extractall(extract_path)
            csv_file_name = zip_ref.namelist()[0]
            csv_file_path = os.path.join(extract_path, csv_file_name)

            # Read the entire CSV file using Pandas
            full_df = pd.read_csv(csv_file_path)

            # Process the narratives DataFrame
            return process_narratives(full_df)
    else:
        print(f"Failed to download the file. Status code: {response.status_code}")
        return pd.DataFrame()  # Return an empty DataFrame if the download fails


# In[ ]:




