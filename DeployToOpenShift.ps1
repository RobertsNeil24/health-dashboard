param (    
    [Parameter(Mandatory=$true)][string]$version='v1',
	[Parameter(Mandatory=$true)][string]$environment='development',
    [Parameter(Mandatory=$true)][string]$component='server',
    [Parameter(Mandatory=$true)][string]$username,    
    [System.Security.SecureString]$password = $(Read-Host "Input password, please" -AsSecureString)
 )
 
 Function Deploy($username, $password, $version, $environment, $component)
 {	 
	Write-Host 'Deploy Main Method'
    oc login https://a.nonprod.ocp.absa.co.za:8443 -u $username -p $password
	docker login -u anything -p $(oc whoami -t) docker-registry-default.apps.nonprod.ocp.absa.co.za		
	docker-compose build
	if ($environment -eq 'development')
	{
        if ($component -eq 'server')
        {
            docker tag cib.onlinepayments.healthchecks.server:$version docker-registry-default.apps.nonprod.ocp.absa.co.za/digital-onlinepayments-dev/cib.onlinepayments.healthchecks.server:$version
		    docker push docker-registry-default.apps.nonprod.ocp.absa.co.za/digital-onlinepayments-dev/cib.onlinepayments.healthchecks.server:$version    
        }
        if ($component -eq 'ui')
        {
            docker tag cib.onlinepayments.healthchecks.ui:$version docker-registry-default.apps.nonprod.ocp.absa.co.za/digital-onlinepayments-dev/cib.onlinepayments.healthchecks.ui:$version
		    docker push docker-registry-default.apps.nonprod.ocp.absa.co.za/digital-onlinepayments-dev/cib.onlinepayments.healthchecks.ui:$version    
        }		
	}

	return $LASTEXITCODE;
 }
 
 Function Main($username, $password, $version, $environment, $component)
 {	
	$BSTR = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($password)
	$notsecure = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)

	$env:DOCKER_IMAGE_VERSION = ""+ $version
	if ($environment -eq 'development')
	{
		$env:DATABASE_NAME = 'cib.onlinepayments.healthchecks'
		$env:DATABASE_IP_ADDRESS = '22.241.105.34'
		$env:DATABASE_USER = 'devuser'
		$env:DATABASE_PASSWORD = 'srLMW9p8ktpN9SdB'
	}

	Write-Host 'Running Main Method'
	Deploy $username $notsecure $version $environment $component
	if ($LASTEXITCODE -ne 0)
	{
		Write-Host 'Deployment Failed'
	}
	else
	{
		Write-Host 'Deployment Completed Successfully'
	}
 }
 
 Main -username $username -password $password -version $version -environment $environment -component $component