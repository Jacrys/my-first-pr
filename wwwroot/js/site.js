// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

const MS_ISSUES = 'is:open+is:issue++user:Microsoft+user:dotnet+user:aspnet+user:PowerShell+user:dotnet-architecture+user:Azure+user:OfficeDev+user:windows-toolkit+user:xamarin+user:SignalR"+user:mono+user:Z3Prover+user:Reactive-Extensions+user:OneGet+user:SharePoint+user:MicrosoftDocs+user:mspnp+user:calabash+user:NuGet+user:metaparticle-io+user:Azure-Samples+user:AzureAD+user:OData+user:mspnp+user:LIS+user:projectkudu+user:ms-iot+user:pwa-builder+user:winjs+user:mixer+user:microsoftgraph&type=Issues';
const MS_FIRST_ISSUES = 'label:good-first-issue+is:open+is:issue++user:Microsoft+user:dotnet+user:aspnet+user:PowerShell+user:dotnet-architecture+user:Azure+user:OfficeDev+user:windows-toolkit+user:xamarin+user:SignalR"+user:mono+user:Z3Prover+user:Reactive-Extensions+user:OneGet+user:SharePoint+user:MicrosoftDocs+user:mspnp+user:calabash+user:NuGet+user:metaparticle-io+user:Azure-Samples+user:AzureAD+user:OData+user:mspnp+user:LIS+user:projectkudu+user:ms-iot+user:pwa-builder+user:winjs+user:mixer+user:microsoftgraph&type=Issues';
const HACKTOBERFEST_ISSUES = 'label:hacktoberfest+is:issue+is:open'
const HACKTOBERFEST_FIRST_ISSUES = 'label:hacktoberfest+is:issue+is:open+label:good-first-issue'
const HACKTOBERFEST_EASY_ISSUES = 'label:hacktoberfest+is:issue+is:open+label:"difficulty:+easy"'
const MS_HACKTOBERFEST_ISSUES = 'label:hacktoberfest+is:open+is:issue++user:Microsoft+user:dotnet+user:aspnet+user:PowerShell+user:dotnet-architecture+user:Azure+user:OfficeDev+user:windows-toolkit+user:xamarin+user:SignalR"+user:mono+user:Z3Prover+user:Reactive-Extensions+user:OneGet+user:SharePoint+user:MicrosoftDocs+user:mspnp+user:calabash+user:NuGet+user:metaparticle-io+user:Azure-Samples+user:AzureAD+user:OData+user:mspnp+user:LIS+user:projectkudu+user:ms-iot+user:pwa-builder+user:winjs+user:mixer+user:microsoftgraph&type=Issues';
const MS_HACKTOBERFEST_FIRST_ISSUES = 'label:hacktoberfest+label:good-first-issue+is:open+is:issue++user:Microsoft+user:dotnet+user:aspnet+user:PowerShell+user:dotnet-architecture+user:Azure+user:OfficeDev+user:windows-toolkit+user:xamarin+user:SignalR"+user:mono+user:Z3Prover+user:Reactive-Extensions+user:OneGet+user:SharePoint+user:MicrosoftDocs+user:mspnp+user:calabash+user:NuGet+user:metaparticle-io+user:Azure-Samples+user:AzureAD+user:OData+user:mspnp+user:LIS+user:projectkudu+user:ms-iot+user:pwa-builder+user:winjs+user:mixer+user:microsoftgraph&type=Issues';
const FIRST_ISSUES = 'is:issue+is:open+label:good-first-issue'
const EASY_ISSUES = 'is:issue+is:open+label:"difficulty:+easy"'

var chipclick = (event) => {
    alert(event);
}
