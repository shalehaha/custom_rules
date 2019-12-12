rules = {
    "version": 1,
    "rules": [
        {
            "condition": {
                "type": "group",
                "definition": {
                    "logic": "and",
                    "conditions": [
                        {
                            "type": "group",
                            "definition": {
                                "logic": "or",
                                "conditions": [
                                    {
                                        "type": "group",
                                        "definition": {
                                            "logic": "and",
                                            "conditions": [
                                                {
                                                    "type": "matcher",
                                                    "definition": {
                                                        "key": "~type",
                                                        "matcher": "eq",
                                                        "values": [
                                                            "com.adobe.eventType.generic.track"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "type": "matcher",
                                                    "definition": {
                                                        "key": "~source",
                                                        "matcher": "eq",
                                                        "values": [
                                                            "com.adobe.eventSource.requestContent"
                                                        ]
                                                    }
                                                },
                                                {
                                                    "type": "matcher",
                                                    "definition": {
                                                        "key": "custom",
                                                        "matcher": "multiply_matcher",
                                                        "values": [
                                                            
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            "consequences": [
                {
                    "id": "RC84399d1d37764f61a16ed4c2c66fb3a7",
                    "type": "pb",
                    "detail": {
                        "timeout": 0,
                        "templateurl": "https://www.adobe.com"
                    }
                }
            ]
        }
    ]
}
