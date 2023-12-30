#!/usr/bin/env python
# coding: utf-8

# # Data Loading
# 
# In this section, we will explore the data loading process for the NTSB Accident Dataset. The dataset is sourced from the AVALL.MDB file, which was downloaded from the NTSB Accident Dataset Download Page. To facilitate data analysis, we've set up static URLs for individual tables and manually split the original narratives CSV file into four separate CSV files due to GitHub's 100 MB file size limit. These split files are named as follows: `narr_accp.csv`, `narr_accf.csv`, `narr_cause.csv`, and `narr_inc.csv`.
# 
# ## Overview
# 
# The data loading process involves several key steps to prepare the dataset for analysis:
# 
# 1. **Loading the Data Dictionary**: The first step is to load the data dictionary CSV file (`eADMSPUB_DataDictionary.csv`) into a DataFrame. This file provides essential information about the dataset, including the names of tables and the data types for each column.
# 
# 2. **Creating a Data Type Dictionary**: Once the data dictionary is loaded, we create a dictionary named `column_data_types`. This dictionary serves as a reference for mapping data types to column names. For each column in the dataset, we extract its data type information from the data dictionary and store it in the `column_data_types` dictionary.
# 
# 3. **Loading Individual Tables**: With the `column_data_types` dictionary prepared, we proceed to load individual tables from the provided URLs. The data types specified in the `column_data_types` dictionary are used during the loading process. We use Pandas' `read_csv` function to read the CSV files from the URLs into DataFrame objects.
# 
# 4. **Merging Narratives Tables**: The dataset includes four separate tables for narratives: `narr_accp`, `narr_accf`, `narr_cause`, and `narr_inc`. If all of these tables are successfully loaded, we merge them into a single narratives DataFrame named `narratives`. This consolidation simplifies narrative analysis.
# 
# 5. **Returning Loaded DataFrames**: Finally, the data loading function returns a dictionary named `loaded_tables` that contains all the loaded DataFrames. These DataFrames are now ready for further analysis and exploration.
# 
# By following this data loading process, we ensure that the dataset is properly prepared for subsequent data analysis tasks, allowing us to gain valuable insights from the NTSB Accident Dataset.
# 

# In[1]:


import pandas as pd
from scripts.narrative_processing import download_and_process_narratives  # Import the narrative processing function

def load_data(load_all=False, **tables):

    # Define a dictionary that maps table names to URLs or file paths
    table_urls = {
        'country': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/Country.csv',
        'event_seq': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/Events_Sequence.csv',
        'findings': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/Findings.csv',
        'flight_crew': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/Flight_Crew.csv',
        'ntsb_admin':  'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/NTSB_Admin.csv',
        'aircraft': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/aircraft.csv',
        'ct_iaids': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/ct_iaids.csv',
        'ct_seqevt': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/ct_seqevt.csv',
        'dt_flight_crew': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/dt_Flight_Crew.csv',
        'dt_aircraft': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/dt_aircraft.csv',
        'dt_events': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/dt_events.csv',
        'engines': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/engines.csv',
        'flight_time': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/flight_time.csv',
        'injury': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/injury.csv',
        'seq_of_events': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/seq_of_events.csv',
        'states': 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/states.csv'

    }
    
     # Load the eADMSPUB_DataDictionary.csv file into a DataFrame
    data_dictionary = pd.read_csv('https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/eADMSPUB_DataDictionary.csv')


    # Create a dictionary to store column data types
    column_data_types = {}

    # Data type mapping
    data_type_mapping = {
        'bit': 'bool',
        'char': 'object',
        'datetime': 'datetime64[ns]',
        'int': 'int64',
        'real': 'float64',
        'smallint': 'int16',
        'text': 'object',
        'tinyint': 'int8',
        'varchar': 'object',
        '(blank)': 'object',
    }

    # Extract data types from the data dictionary and map to column names
    for row in data_dictionary.itertuples(index=False):
        table_name = row.Table
        column_name = row.Column
        data_type = row[6]  # Use the numeric index to access the seventh column
        # Map the column name to the corresponding data type
        if data_type in data_type_mapping:
            column_data_types[f'{table_name}_{column_name}'] = data_type_mapping[data_type]
        else:
            column_data_types[f'{table_name}_{column_name}'] = 'object'  # Default to 'object' for unknown data types

    # Create an empty dictionary to store loaded DataFrames
    loaded_tables = {}
    
    # Special handling for the narratives table
    narratives_zip_url = 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/narratives.csv.zip'
    extract_path = '/Users/jeremyfeagan/Downloads'
    narratives_df = download_and_process_narratives(narratives_zip_url, extract_path)
    if not narratives_df.empty:
        loaded_tables['narratives'] = narratives_df


    # If load_all is True, or if 'narratives' is specifically requested in tables, load the narratives table
    if load_all or 'narratives' in tables:
        narratives_zip_url = 'https://raw.githubusercontent.com/flyguy221/NTSB-Aviation-Investigation-Analysis/main/data/raw/AVALL/narratives.csv.zip'
        extract_path = '/Users/jeremyfeagan/Downloads'  # Update path as needed
        narratives_df = download_and_process_narratives(narratives_zip_url, extract_path)
        if not narratives_df.empty:
            loaded_tables['narratives'] = narratives_df

    # Load other tables
    for table_name, url in table_urls.items():
        if load_all or table_name in tables:
            try:
                # Adjust dtype based on the data dictionary, if applicable
                dtype = column_data_types.get(table_name, None)
                loaded_tables[table_name] = pd.read_csv(url, dtype=dtype, low_memory=False)
            except Exception as e:
                print(f"Error loading table {table_name}: {str(e)}")
   
    return loaded_tables


# In[ ]:




