@description('Location for all resources')
param location string = resourceGroup().location

@description('The name of the App Service app. This must be glabally unique.')
param appName string = 'costacodecraft'

@description('Docker image name')
param dockerImageName string

@description('The environment where the app is deployed.')
@allowed([
  'prod'
  'dev'
])
param environmentType string
var config = {
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
    skuName: config[environmentType].appServiceSku
    capacity: config[environmentType].appServiceCapacity
    dockerImageName: dockerImageName
    tags:commonTags
    location: location
  }
}

output appHostname string = appService.outputs.hostname
