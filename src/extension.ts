import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const electricDomain = vscode.languages.registerCompletionItemProvider('yaml',
	{
		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) 
		{
			const electricDomainCompletion = new vscode.CompletionItem(
`Electric Domain Template:
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
    domain: "electric power"
    `);

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
        // TODO: add edges and refs  
        return [
				electricDomainCompletion,
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

	const provider = vscode.languages.registerCompletionItemProvider('yaml', {

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

/*
package schema

#Entity: {
	knownAs:            *"" | string
	ownership:          *"" | "public investors" | "private investors" | "members"
	organizationalForm: *"" | "individual" | "company" | "consortium"
	description:        *"" | string
	comment:            *"" | string
	governmental:       *"" | "federal" | "regional" | "state" | "local"
	domain:             *"electric power" | string
	name:               *"" | string
	endUser:            *false | bool
	serviceProvider:    *false | bool
	BUSINESS_RELATIONSHIP_WITH_Entity?: [...#EDGE_BUSINESS_RELATIONSHIP_WITH_Entity]
	ADOPTED_Initiative?: [...#EDGE_ADOPTED_Initiative]
	PROVIDES_Service?: {
		WHERE: #REF_TO_SERVICE
	}
	OPERATES_Project?: [...#EDGE_OPERATES_Project]
	LOCATED_IN_Place?: {
		WHERE: #REF_TO_PLACE
	}
}

#Service: {
	knownAs:                     *"" | string
	powerDeliveryMW:             *0.0 | float
	solarPowerCapacityMWhYear:   *0.0 | float
	biomassCarbonImpact:         *"" | "emissions neutral" | "reduces existing emissions" | "non-positive impact"
	hydroCaptureType:            *"" | "run of river" | "dam"
	powerStorageType:            *"" | "battery (electrochemical)" | "heat or inertia" | "pumped storage" | "reservoir"
	gridStabilization:           *"" | "increases" | "neutral" | "decreases"
	powerGenerationMW:           *0.0 | float
	geoThermalPowerCapacityMW:   *0.0 | float
	sustainabiltyFocused:        *false | bool
	electricUtilityService:      *false | bool
	solarCaptureTechnology:      *"" | string
	geoThermalCaptureType:       *"" | string
	domain:                      *"electric power" | string
	solarPlantType:              *"" | "farm" | "virtual farm" | "non-farm"
	windPowerCapacityMWhYear:    *0.0 | float
	windCaptureTechnology:       *"" | "horizontal" | "vertical" | "bladeless"
	economicModel:               *"" | "community benefits" | "public benefits" | "financial returns"
	geographicalScale:           *"" | "local" | "regional" | "national"
	electricTransmissionService: *false | bool
	comment:                     *"" | string
	description:                 *"" | string
	nuclearPowerTechnology:      *"" | string
	powerStorageMW:              *0.0 | float
	windPowerCapacityMW:         *0.0 | float
	nuclearPowerCapacityMW:      *0.0 | float
	solarPowerCapacityMW:        *0.0 | float
	windPlantType:               *"" | "onshore" | "offshore fixed" | "offshore floating"
	biomassPowerMWhYear:         *0.0 | float
	biomassCaptureType:          *"" | "waste-to-energy" | "methane capture"
	targetUsers:                 *"" | "commercial" | "residential"
	hydroPowerCapacityMW:        *0.0 | float
	electricWholesalingService:  *false | bool
	PROVIDED_TO_Entity?: {
		WHERE: #REF_TO_ENTITY
	}
}

#Project: {
	operationalDate:     *"" | string
	usesNaturalResource: *"" | "river" | "enclosed water body" | "ocean" | "wetland" | "unused land"
	usesBuiltResource:   *"" | "canal" | "reservoir" | "existing structure" | "new structure" | "industrial, transit or commercial facility" | "farmland" | "developed land" | "brownfield"
	description:         *"" | string
	comment:             *"" | string
	domain:              string | *"electric power"
	knownAs:             *"" | string
	projectState:        *"" | "potential" | "proposed" | "in process" | "operational" | "upgrade" | "decomissioning"
	LOCATED_IN_Place?: {
		WHERE: #REF_TO_PLACE
	}
	ENABLES_Service?: {
		WHERE: #REF_TO_SERVICE
	}
}

#Initiative: {
	comment:                         *"" | string
	domain:                          *"electric power" | string
	knownAs:                         *"" | string
	purpose:                         *"" | string
	decarbonizationPlan:             *false | bool
	mandatedDecarbonizationTargets:  *"percent, date" | string
	voluntaryDecarbonizationTargets: *"percent, date" | string
	description:                     *"" | string
	COMPLIES_WITH_Regulation?: [...#EDGE_COMPLIES_WITH_Regulation]
	SUPPORTS_Project?: {
		WHERE: #REF_TO_PROJECT
	}
	APPLIES_TO_Place?: {
		WHERE: #REF_TO_PLACE
	}
	SUPPORTS_Service?: {
		WHERE: #REF_TO_SERVICE
	}
}

#Regulation: {
	relatedRegulation: *"" | string
	description:       *"" | string
	comment:           *"" | string
	domain:            *"electric power" | string
	knownAs:           *"" | string
	statutoryTextLink: *"" | string
	purpose:           *"" | string
	APPLIES_TO_Place?: {
		WHERE: #REF_TO_PLACE
	}
	APPLIES_TO_Entity?: {
		WHERE: #REF_TO_ENTITY
	}
	APPLIES_TO_Service?: {
		WHERE: #REF_TO_SERVICE
	}
	APPLIES_TO_Project?: {
		WHERE: #REF_TO_PROJECT
	}
}

#Place: {
	knownAs:             *"" | string
	description:         *"" | string
	state:               *"" | string
	city:                *"" | string
	internationalRegion: *"" | string
	multistateRegion:    *"" | string
	gridCoordinates:     *0.0 | float
	comment:             *"" | string
	country:             *"" | string
	county:              *"" | string
}

#GovernmentAuthority: {
	regulatoryAgency: *false | bool
	description:      *"" | string
	comment:          *"" | string
	knownAs:          *"" | string
	level:            *"" | "federal" | "regional" | "state" | "local"
	domain:           *"electric power" | string
	ADOPTED_Regulation?: [...#EDGE_ADOPTED_Regulation]
	REGULATES_Project?: {
		WHERE: #REF_TO_PROJECT
	}
	REGULATES_Service?: {
		WHERE: #REF_TO_SERVICE
	}
	REGULATES_Entity?: {
		WHERE: #REF_TO_ENTITY
	}
	LOCATED_IN_Place?: {
		WHERE: #REF_TO_PLACE
	}
}

#EDGE_BUSINESS_RELATIONSHIP_WITH_Entity: {
	businessRelationshipType: *"" | "partnership" | "contractual commitment" | "subsidiary of" | "affiliate of"
	description:              *"" | string
	comment:                  *"" | string
	WHERE:                    #REF_TO_ENTITY
}
#EDGE_ADOPTED_Initiative: {
	adoptionDate: *"" | string
	WHERE:        #REF_TO_INITIATIVE
}
#EDGE_PROVIDES_Service: {
	WHERE: #REF_TO_SERVICE
}
#EDGE_OPERATES_Project: {
	role:  *"" | "owns" | "manages" | "oversees"
	WHERE: #REF_TO_PROJECT
}
#EDGE_LOCATED_IN_Place: {
	WHERE: #REF_TO_PLACE
}
#EDGE_PROVIDED_TO_Entity: {
	WHERE: #REF_TO_ENTITY
}
#EDGE_LOCATED_IN_Place: {
	WHERE: #REF_TO_PLACE
}
#EDGE_ENABLES_Service: {
	WHERE: #REF_TO_SERVICE
}
#EDGE_COMPLIES_WITH_Regulation: {
	compliance: *"" | "mandatory" | "optional"
	WHERE:      #REF_TO_REGULATION
}
#EDGE_SUPPORTS_Project: {
	WHERE: #REF_TO_PROJECT
}
#EDGE_APPLIES_TO_Place: {
	WHERE: #REF_TO_PLACE
}
#EDGE_SUPPORTS_Service: {
	WHERE: #REF_TO_SERVICE
}
#EDGE_APPLIES_TO_Place: {
	WHERE: #REF_TO_PLACE
}
#EDGE_APPLIES_TO_Entity: {
	WHERE: #REF_TO_ENTITY
}
#EDGE_APPLIES_TO_Service: {
	WHERE: #REF_TO_SERVICE
}
#EDGE_APPLIES_TO_Project: {
	WHERE: #REF_TO_PROJECT
}
#EDGE_ADOPTED_Regulation: {
	adoptionDate: *"" | string
	WHERE:        #REF_TO_REGULATION
}
#EDGE_REGULATES_Project: {
	WHERE: #REF_TO_PROJECT
}
#EDGE_REGULATES_Service: {
	WHERE: #REF_TO_SERVICE
}
#EDGE_REGULATES_Entity: {
	WHERE: #REF_TO_ENTITY
}
#EDGE_LOCATED_IN_Place: {
	WHERE: #REF_TO_PLACE
}
#REF_TO_ENTITY: {
	domain:  *"electric power" | string
	knownAs: *"" | string
}
#REF_TO_INITIATIVE: {
	domain:  *"electric power" | string
	knownAs: *"" | string
	purpose: *"" | string
}
#REF_TO_PLACE: {
	knownAs: *"" | string
}
#REF_TO_PROJECT: {
	domain:  *"electric power" | string
	knownAs: *"" | string
}
#REF_TO_REGULATION: {
	knownAs: *"" | string
}
#REF_TO_SERVICE: {
	knownAs: *"" | string
	domain:  *"electric power" | string
}

Entity: #Entity & {}

Service: #Service & {}

Project: #Project & {}

Initiative: #Initiative & {}

Regulation: #Regulation & {}

Place: #Place & {}

GovernmentAuthority: #GovernmentAuthority & {}

#Graph: {
	#Entities: [...Entity]
	#Services: [...Service]
	#Projects: [...Project]
	#Initiatives: [...Initiative]
	#Regulations: [...Regulation]
	#Places: [...Place]
	#GovernmentAuthorities: [...GovernmentAuthority]
}

Graph: #Graph & {}

*/