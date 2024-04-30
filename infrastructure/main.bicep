@description('Location for all resources')
param location string = resourceGroup().location

@description('The name of the App Service. This must be globally unique.')
param appName string

@description('Docker image full name. repository/image:tag')
param dockerImageName string

@description('The hostnames for the app service')
param hostNames array

@description('Common tags for all resources')
param commonTags object

@description('The environment where the app is deployed.')
@allowed([
  'prod'
  'dev'
])
param environmentType string
var configurations = {
  prod: {
    appServiceSku: 'B1'
    appServiceCapacity: 1
  }
  dev: {
    appServiceSku: 'F1'
    appServiceCapacity: 1
  }
}

module appService './modules/app-service.bicep' = {
  name: 'appService'
  params: {
    appName: appName
    skuName: configurations[environmentType].appServiceSku
    capacity: configurations[environmentType].appServiceCapacity
    dockerImageName: dockerImageName
    tags: commonTags
    hostNames: hostNames
    location: location
  }
}

output appHostname string = appService.outputs.hostname
