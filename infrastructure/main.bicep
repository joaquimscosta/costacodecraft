@description('Location for all resources')
param location string = resourceGroup().location

@description('The name of the App Service app. This must be glabally unique.')
param appName string = 'costacodecraft'

@description('App Service Plan Sku')
@allowed([
  'B1'
])
param appServiceSku string = 'B1'

@description('Docker image name')
param dockerImageName string 

module appService './modules/app-service.bicep' = {
  name: 'appService'
  params: {
    appName: appName
    appServiceSku: appServiceSku
    dockerImageName: dockerImageName
    location: location
  }
}

output appHostname string = appService.outputs.appHostname
