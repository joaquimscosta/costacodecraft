@description('The Azure region into which the resources should be deployed.')
param location string
@description('The name of the App Service app. This must be glabally unique.')
param appName string
@description('App Service Plan Sku')
@allowed([
  'B1'
  'F1'
])
param skuName string

@description('App Service Plan Capacity')
@minValue(1)
@maxValue(2)
param capacity int = 1

@description('Full Container/Docker image name')
param dockerImageName string

@description('Common tags to apply to all resources.')
param tags object

var appServicePlanName = 'mywebapp'
var appServicePlanKind = 'linux'

resource appServicePlan 'Microsoft.Web/serverfarms@2023-01-01' = {
  name: appServicePlanName
  location: location
  kind: appServicePlanKind
  tags: tags
  sku: {
    name: skuName
    capacity: capacity
  }
}

resource app 'Microsoft.Web/sites@2023-01-01' = {
  name: appName
  location: location
  tags: tags
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
    siteConfig: {
      linuxFxVersion: 'DOCKER|${dockerImageName}'
    }
  }
}

output hostname string = app.properties.defaultHostName
