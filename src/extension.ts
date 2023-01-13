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
		WHERE: *serviceRef
	OPERATES_Project: [...EDGE_OPERATES_Project]
	LOCATED_IN_Place: 
		WHERE: *placeRef
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
		WHERE: *entityRef
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
		WHERE: *placeRef
	ENABLES_Service:
		WHERE: *serviceRef
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
		WHERE: *projectRef
	APPLIES_TO_Place:
		WHERE: *placeRef
	SUPPORTS_Service:
		WHERE: *serviceRef
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
		WHERE: *placeRef
	APPLIES_TO_Entity: 
		WHERE: *entityRef
	APPLIES_TO_Service:
		WHERE: *serviceRef
	APPLIES_TO_Project:
		WHERE: *projectRef
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
		WHERE: *projectRef
	REGULATES_Service: 
		WHERE: *serviceRef
	REGULATES_Entity: 
		WHERE: *entityRef
	LOCATED_IN_Place:
		WHERE: *placeRef
`); 

    const businessRelationship = new vscode.CompletionItem(
`EDGE_BUSINESS_RELATIONSHIP_WITH_Entity: 
  businessRelationshipType: ""
  description: ""
  comment: ""
  WHERE: *entityRef
`);

    const adoptedInitiative = new vscode.CompletionItem(
`EDGE_ADOPTED_Initiative: 
  adoptionDate: ""
  WHERE: *initiativeRef
`);


    const providesService = new vscode.CompletionItem(
`EDGE_PROVIDES_Service: 
  WHERE: *serviceRef
`);

  const operatesProject = new vscode.CompletionItem(
`EDGE_OPERATES_Project: 
  role:  ""
  WHERE: *projectRef
`);

    const locatedPlace = new vscode.CompletionItem(
`EDGE_LOCATED_IN_Place: 
  WHERE: *placeRef
`);

 const providedEntity = new vscode.CompletionItem(
`EDGE_PROVIDED_TO_Entity: 
  WHERE: *entityRef
`);


 const enablesService = new vscode.CompletionItem(
`EDGE_ENABLES_Service: 
  WHERE: *serviceRef
`);

 const compliesRegulation = new vscode.CompletionItem(
`EDGE_COMPLIES_WITH_Regulation: 
  compliance: ""
  WHERE: *regulationRef
`);

    const supportsProject = new vscode.CompletionItem(
`EDGE_SUPPORTS_Project: 
  WHERE: *projectRef
`);

 const appliesPlace = new vscode.CompletionItem(
`EDGE_APPLIES_TO_Place: 
  WHERE: *placeRef
`);

 const supportsService = new vscode.CompletionItem(
`EDGE_SUPPORTS_Service: 
  WHERE: *serviceRef
`);


 const appliesEntity = new vscode.CompletionItem(
`EDGE_APPLIES_TO_Entity: 
  WHERE: *entityRef
`);

 const appliesService = new vscode.CompletionItem(
`EDGE_APPLIES_TO_Service: 
  WHERE: *serviceRef
`);

 const appliesProject = new vscode.CompletionItem(
`EDGE_APPLIES_TO_Project: 
  WHERE: *projectRef
`);

 const adoptedRegulation = new vscode.CompletionItem(
`EDGE_ADOPTED_Regulation: 
  adoptionDate: ""
  WHERE: *regulationRef
`);

    const regulatesProject = new vscode.CompletionItem(
`EDGE_REGULATES_Project: 
  WHERE: *projectRef
`);

 const regulatesService = new vscode.CompletionItem(
`EDGE_REGULATES_Service: 
  WHERE: *serviceRef
`);

 const regulatesEntity = new vscode.CompletionItem(
`EDGE_REGULATES_Entity: 
  WHERE: *entityRef
`);


 const refEntity = new vscode.CompletionItem(
`REF_TO_ENTITY: &entityRef
  domain: "electric power"
  knownAs: ""
`);

    const refInitiative = new vscode.CompletionItem(
`REF_TO_INITIATIVE: &initiativeRef
  domain: "electric power"
  knownAs: ""
  purpose: ""
`);

    const refPlace = new vscode.CompletionItem(
`REF_TO_PLACE: &placeRef
  knownAs: ""
`);

 const refProject = new vscode.CompletionItem(
`REF_TO_PROJECT: &projectRef
  domain: "electric power"
  knownAs: ""
`);

    const refRegulation = new vscode.CompletionItem(
`REF_TO_REGULATION: &regulationRef
  knownAs: ""
`);

 const refService = new vscode.CompletionItem(
`REF_TO_SERVICE: &serviceRef
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