
param bindingHostNames array = []
param tags object = {}
param location string
param appServicePlan object

resource certificate 'Microsoft.Web/certificates@2023-01-01' = [
  for name in bindingHostNames: {
    name: name
    location: location
    tags: tags
    properties: {
      hostNames: [name]
      canonicalName: name
      serverFarmId: appServicePlan.id
    }
  }
]

module enableCertificates 'dns-binding.bicep' = {
  name: 'enableCertsForDnsBindings'
  params: {
    appName: 'costacodecraft'
    dnsSettings: [for name in bindingHostNames:{
      name: name
      sslState: 'SniEnabled'
      thumbprint: certificate[name].properties.thumbprint
    } ]
  }
}
