terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm",
      version = "~> 4.0"
    }
  }
}

provider "azurerm" {
  resource_provider_registrations = "none"
  subscription_id                 = var.subscription_id
  features {
  }
}

resource "azurerm_resource_group" "mywebrg" {
  name     = "mywebrg"
  location = "East US"
}

resource "azurerm_service_plan" "plan" {
  name                = "${var.app_name}-plan"
  resource_group_name = azurerm_resource_group.mywebrg.name
  location            = azurerm_resource_group.mywebrg.location
  os_type             = "Linux"
  sku_name            = "B1"
}

resource "azurerm_linux_web_app" "app" {
  name                = var.app_name
  resource_group_name = azurerm_resource_group.mywebrg.name
  location            = azurerm_resource_group.mywebrg.location
  service_plan_id     = azurerm_service_plan.plan.id

  site_config {
  }

}