@description('Location for all resources')
param location string = resourceGroup().location

@description('The name of the App Service app. This must be glabally unique.')
param appName string

@description('Docker image full name. repository/image:tag')
param dockerImageName string

@description('The hostnames for the app service')
param hostNames array = [
  'costacodecraft.com'
  'www.costacodecraft.com'
]

@description('The environment where the app is deployed.')
@allowed([
  'prod'
  'dev'
])
param environmentType string
var configurations = {
  PROD: {
    appServiceSku: 'B1'
    appServiceCapacity: 1
  }
  DEV: {
    appServiceSku: 'F1'
    appServiceCapacity: 1
  }
}

var commonTags = {
    app: appName
    environment: 'Production'
    purpose: 'Personal Website'
}

module appService './modules/app-service.bicep' = {
  name: 'appService'
  params: {
    appName: appName
    skuName: configurations[environmentType].appServiceSku
    capacity: configurations[environmentType].appServiceCapacity
    dockerImageName: dockerImageName
    tags:commonTags
    hostNames: hostNames
    location: location
  }
}

output appHostname string = appService.outputs.hostname
