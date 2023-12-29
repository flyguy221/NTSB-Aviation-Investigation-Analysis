Run time: 29/12/2023 11:03:03

Json query: {"ExportFormat":"data","ResultSetSize":500,"ResultSetOffset":1500,"TargetCollection":"cases","AndOr":"And","QueryGroups":[{"AndOr":"And","QueryRules":[{"RuleType":0,"Values":["ACC"],"Columns":["Event.EventType"],"Operator":"is"},{"RuleType":0,"Values":["121"],"Columns":["AviationOperation.RegulationFlightConductedUnder"],"Operator":"is"},{"RuleType":0,"Values":["true"],"Columns":["Case.OpenClosedStatus"],"Operator":"is"}]}],"SortColumn":null,"SortDescending":true,"SessionId":511503}

Query text: [
	(EventType) is (ACC)
	And
	(RegulationFlightConductedUnder) is (121)
	And
	(OpenClosedStatus) is (true)
]

