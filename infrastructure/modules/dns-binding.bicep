
@description('Name of the app service')
param appName string
@description('List of custom domain name to bind to the app')
param customDomainNames array =  [
  'costacodecraft.com'
  'www.costacodecraft.com'
]

// @allowed([
//   'Disabled'
//   'SniEnabled'
//   'IpBasedEnabled'
// ])
// param sslState string = 'Disabled'

resource app 'Microsoft.Web/sites@2023-01-01' existing = {
  name: appName
}

resource binding1 'Microsoft.Web/sites/hostNameBindings@2023-01-01' = {
    parent: app
    name: customDomainNames[0]
    properties: {
      siteName: appName
      hostNameType:'Verified'
      sslState: 'Disabled'
      // thumbprint: ''
    }
  }
  resource binding2 'Microsoft.Web/sites/hostNameBindings@2023-01-01' = {
    parent: app
    name: customDomainNames[1]
    properties: {
      siteName: appName
      hostNameType:'Verified'
      sslState: 'Disabled'
      // thumbprint: ''
    }
  }

// resource binding 'Microsoft.Web/sites/hostNameBindings@2023-01-01' = [
//   for name in customDomainNames: {
//     parent: app
//     name: name
//     properties: {
//       siteName: appName
//       hostNameType:'Verified'
//       sslState: 'Disabled'
//       thumbprint: ''
//     }
//   }
// ]
// output bindingHostNames array = [for i in range(0, length(customDomainNames)): binding[i].name]
