import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const electricDomain = vscode.languages.registerCompletionItemProvider('yaml', {
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
      const electricEntity = new vscode.CompletionItem(
`Entity: 
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
  `);
      const electricService = new vscode.CompletionItem(
`Service:
  knownAs: ""
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
  solarCaptureTechnology
  geoThermalCaptureType
  domain: "electric power"
  solarPlantType
  windPowerCapacityMWhYear: 0.0
  windCaptureTechnology
  economicModel
  geographicalScale
  electricTransmissionService: false
  comment: ""
  description: ""
  nuclearPowerTechnology
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
`);
      const electricProject = new vscode.CompletionItem(
`Project:
  operationalDate: ""
  usesNaturalResource
  usesBuiltResource
  description: ""
  comment: ""
  domain: "electric power"
  knownAs: ""
  projectState
`);
      const electricInitiative = new vscode.CompletionItem(
`Initiative:
  comment: ""
  domain: "electric power"
  knownAs: ""
  purpose: ""
  decarbonizationPlan: false
  mandatedDecarbonizationTargets
  voluntaryDecarbonizationTargets
  description: ""
`);
      const electricRegulation = new vscode.CompletionItem(
`Regulation:
  relatedRegulation: ""
  description: ""
  comment: ""
  domain: "electric power"
  knownAs: ""
  statutoryTextLink: ""
  purpose: ""
`);
      const electricPlace = new vscode.CompletionItem(
`Place:
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
`);             
      const electricGovernmentAuthority = new vscode.CompletionItem(
`GovernmentAuthority:
  regulatoryAgency: false
  description: ""
  comment: ""
  knownAs: ""
  level
  domain: "electric power"
`);     
		return [
      electricEntity,
      electricService,
      electricProject,
      electricInitiative,
      electricRegulation,
      electricPlace,
      electricGovernmentAuthority
			];
		}
	});
	context.subscriptions.push(electricDomain);
}