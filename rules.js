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
                            "values": []
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
        },
        {
          "id": "RC84399d1d37764f61a16ed4c2c66fb3a7",
          "type": "function",
          "detail": {
            "function_name": "print_log"
          }
        }
      ]
    },
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
                            "key": "data.contextdata.test",
                            "matcher": "eq",
                            "values": [
                              "normal"
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
          "type": "event",
          "detail": {
            "source": "com.adobe.eventSource.requestContent",
            "type": "com.adobe.eventType.generic.track",
            "data": {
              "test": "from js rules "
            }
          }
        }
      ]
    },
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
                            "key": "data.state",
                            "matcher": "eq",
                            "values": [
                              "shared state test"
                            ]
                          }
                        },
                        {
                          "type": "matcher",
                          "definition": {
                            "key": "~states.com.adobe.module.configuration.build.environment",
                            "matcher": "eq",
                            "values": [
                              "dev"
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
          "type": "event",
          "detail": {
            "source": "com.adobe.eventSource.requestContent",
            "type": "com.adobe.eventType.generic.track",
            "data": {
              "test": "from js rules, triggered with shared state"
            }
          }
        }
      ]
    },
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
                            "key": "data.state",
                            "matcher": "eq",
                            "values": [
                              "server side rule"
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
          "type": "sr",
          "detail": {
            "timeout": 0,
            "templateurl": "http://amsdkci-lehi-mbp.corp.adobe.com:3001/api/trigger_event"
          }
        }
      ]
    }
  ]
}
