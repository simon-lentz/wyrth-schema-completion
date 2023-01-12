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
  BUSINESS_RELATIONSHIP_WITH_Entity: [...EDGE_BUSINESS_RELATIONSHIP_WITH_Entity]
	ADOPTED_Initiative: [...EDGE_ADOPTED_Initiative]
	PROVIDES_Service: 
		WHERE: REF_TO_SERVICE
	OPERATES_Project: [...EDGE_OPERATES_Project]
	LOCATED_IN_Place: 
		WHERE: REF_TO_PLACE
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
  PROVIDED_TO_Entity: 
		WHERE: REF_TO_ENTITY
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
  LOCATED_IN_Place:
		WHERE: REF_TO_PLACE
	ENABLES_Service:
		WHERE: REF_TO_SERVICE
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
  COMPLIES_WITH_Regulation: [...EDGE_COMPLIES_WITH_Regulation]
	SUPPORTS_Project:
		WHERE: REF_TO_PROJECT
	APPLIES_TO_Place:
		WHERE: REF_TO_PLACE
	SUPPORTS_Service:
		WHERE: REF_TO_SERVICE
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
  APPLIES_TO_Place:
		WHERE: REF_TO_PLACE
	APPLIES_TO_Entity: 
		WHERE: REF_TO_ENTITY
	APPLIES_TO_Service:
		WHERE: REF_TO_SERVICE
	APPLIES_TO_Project:
		WHERE: REF_TO_PROJECT
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
  ADOPTED_Regulation: [...EDGE_ADOPTED_Regulation]
	REGULATES_Project: 
		WHERE: REF_TO_PROJECT
	REGULATES_Service: 
		WHERE: REF_TO_SERVICE
	REGULATES_Entity: 
		WHERE: REF_TO_ENTITY
	LOCATED_IN_Place:
		WHERE: REF_TO_PLACE
`); 

    const businessRelationship = new vscode.CompletionItem(
`EDGE_BUSINESS_RELATIONSHIP_WITH_Entity: 
  businessRelationshipType: ""
  description: ""
  comment: ""
  WHERE: REF_TO_ENTITY
`);

    const adoptedInitiative = new vscode.CompletionItem(
`EDGE_ADOPTED_Initiative: 
  adoptionDate: ""
  WHERE: REF_TO_INITIATIVE
`);


    const providesService = new vscode.CompletionItem(
`EDGE_PROVIDES_Service: 
  WHERE: REF_TO_SERVICE
`);

  const operatesProject = new vscode.CompletionItem(
`EDGE_OPERATES_Project: 
  role:  ""
  WHERE: REF_TO_PROJECT
`);

    const locatedPlace = new vscode.CompletionItem(
`EDGE_LOCATED_IN_Place: 
  WHERE: REF_TO_PLACE
`);

 const providedEntity = new vscode.CompletionItem(
`EDGE_PROVIDED_TO_Entity: 
  WHERE: REF_TO_ENTITY
`);


 const enablesService = new vscode.CompletionItem(
`EDGE_ENABLES_Service: 
  WHERE: REF_TO_SERVICE
`);

 const compliesRegulation = new vscode.CompletionItem(
`EDGE_COMPLIES_WITH_Regulation: 
  compliance: ""
  WHERE: REF_TO_REGULATION
`);

    const supportsProject = new vscode.CompletionItem(
`EDGE_SUPPORTS_Project: 
  WHERE: REF_TO_PROJECT
`);

 const appliesPlace = new vscode.CompletionItem(
`EDGE_APPLIES_TO_Place: 
  WHERE: REF_TO_PLACE
`);

 const supportsService = new vscode.CompletionItem(
`EDGE_SUPPORTS_Service: 
  WHERE: REF_TO_SERVICE
`);


 const appliesEntity = new vscode.CompletionItem(
`EDGE_APPLIES_TO_Entity: 
  WHERE: REF_TO_ENTITY
`);

 const appliesService = new vscode.CompletionItem(
`EDGE_APPLIES_TO_Service: 
  WHERE: REF_TO_SERVICE
`);

 const appliesProject = new vscode.CompletionItem(
`EDGE_APPLIES_TO_Project: 
  WHERE: REF_TO_PROJECT
`);

 const adoptedRegulation = new vscode.CompletionItem(
`EDGE_ADOPTED_Regulation: 
  adoptionDate: ""
  WHERE: REF_TO_REGULATION
`);

    const regulatesProject = new vscode.CompletionItem(
`EDGE_REGULATES_Project: 
  WHERE: REF_TO_PROJECT
`);

 const regulatesService = new vscode.CompletionItem(
`EDGE_REGULATES_Service: 
  WHERE: REF_TO_SERVICE
`);

 const regulatesEntity = new vscode.CompletionItem(
`EDGE_REGULATES_Entity: 
  WHERE: REF_TO_ENTITY
`);


 const refEntity = new vscode.CompletionItem(
`REF_TO_ENTITY: 
  domain: "electric power"
  knownAs: ""
`);

    const refInitiative = new vscode.CompletionItem(
`REF_TO_INITIATIVE: 
  domain: "electric power"
  knownAs: ""
  purpose: ""
`);

    const refPlace = new vscode.CompletionItem(
`REF_TO_PLACE: 
  knownAs: ""
`);

 const refProject = new vscode.CompletionItem(
`REF_TO_PROJECT: 
  domain: "electric power"
  knownAs: ""
`);

    const refRegulation = new vscode.CompletionItem(
`REF_TO_REGULATION: 
  knownAs: ""
`);

 const refService = new vscode.CompletionItem(
`REF_TO_SERVICE: 
  knownAs: ""
  domain: "electric power"
`);

		return [
      electricEntity,
      electricService,
      electricProject,
      electricInitiative,
      electricRegulation,
      electricPlace,
      electricGovernmentAuthority,
      businessRelationship,
      adoptedInitiative,
      providesService,
      operatesProject,
      locatedPlace,
      providedEntity,
      enablesService,
      compliesRegulation,
      supportsProject,
      appliesPlace,
      supportsService,
      appliesEntity,
      appliesService,
      appliesProject,
      adoptedRegulation,
      regulatesEntity,
      regulatesProject,
      regulatesService,
      locatedPlace,
      refEntity,
      refInitiative,
      refPlace,
      refProject,
      refRegulation,
      refService
			];
		}
	});
	context.subscriptions.push(electricDomain);
}