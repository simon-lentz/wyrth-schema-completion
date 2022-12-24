import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const electricDomain = vscode.languages.registerCompletionItemProvider('plaintext',
	{
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) 
		{
			const electricDomainCompletion = new vscode.CompletionItem(
`Electric Domain Manual Entry:	
	Entity: 
		knownAs: ""
		ownership
		organizationalForm
		description: ""
		comment: ""
		governmental
		domain: "electric power"
		name: ""
		endUser: false
		serviceProvider: false
	Service:
		powerDeliveryMW: 0.0
		solarPowerCapacityMWhYear: 0.0
		biomassCarbonImpact
		hydroCaptureType
		powerStorageType
		gridStabilization
		powerGenerationMW: 0.0
		geoThermalPowerCapacityMW: 0.0
		sustainabiltyFocused: false
		electricUtilityService: false
		solarCaptureTechnology: ""
		geoThermalCaptureType: ""
		domain: "electric power"
		solarPlantType
		windPowerCapacityMWhYear: 0.0
		windCaptureTechnology
		economicModel
		geographicalScale
		electricTransmissionService: false
		comment: ""
		description: ""
		nuclearPowerTechnology: ""
		powerStorageMW: 0.0
		windPowerCapacityMW: 0.0
		nuclearPowerCapacityMW: 0.0
		solarPowerCapacityMW: 0.0
		windPlantType
		biomassPowerMWhYear: 0.0
		biomassCaptureType
		targetUsers
		hydroPowerCapacityMW: 0.0
		electricWholesalingService: false
	Project:
		operationalDate: ""
		usesNaturalResource
		usesBuiltResource
		description: ""
		comment: ""
		domain: "electric power"
		knownAs: ""
		projectState
	Initiative:
		comment: ""
		domain: "electric power"
		knownAs: ""
		purpose: ""
		decarbonizationPlan: false
		mandatedDecarbonizationTargets
		voluntaryDecarbonizationTargets
		description: ""
	Regulation:
		relatedRegulation: ""
		description: ""
		comment: ""
		domain: "electric power"
		knownAs: ""
		statutoryTextLink: ""
		purpose: ""
	Place:
		knownAs: ""
		description: ""
		state: ""
		city: ""
		internationalRegion: ""
		multistateRegion: ""
		gridCoordinates: (0.0, 0.0)
		comment: ""
		country: ""
		county: ""
	GovernmentAuthority:
		regulatoryAgency: false
		description: ""
		comment: ""
		knownAs: ""
		level
		domain: "electric power"`);
		
			return [
				electricDomainCompletion,
			];
		}
	});

	const provider = vscode.languages.registerCompletionItemProvider('plaintext', {

			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				const linePrefix = document.lineAt(position).text.substring(0, position.character);
				
				if (!linePrefix.endsWith('console.')) {
					return undefined; 
				}
				return [
					new vscode.CompletionItem('log', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.' // triggered whenever a '.' is being typed
	);
	context.subscriptions.push(electricDomain, provider);
}