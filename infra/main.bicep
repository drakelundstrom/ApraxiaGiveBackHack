param location string = resourceGroup().location

resource appServicePlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: 'FrontEndAppSerivcePlan'
  location: location
  sku: {
    name: 'F1'
  }
  kind: 'linux'
}

resource appService 'Microsoft.Web/sites@2020-06-01' = {
  name: 'ApraxiaFrontEnd'
  location: location
  properties: {
    serverFarmId: appServicePlan.id
  }
}
