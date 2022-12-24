import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const provider1 = vscode.languages.registerCompletionItemProvider('plaintext', {

		provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {

			const entityCompletion = new vscode.CompletionItem(`
			"Entity": {
				"knownAs": "",
				"ownership": "",
				"organizationalForm": "",
				"description": "",
				"comment": "",
				"governmental": "",
				"domain": "electric power",
				"name": "",
				"endUser": true,
				"serviceProvider": true
			}`);
			
			const serviceCompletion = new vscode.CompletionItem(`
			"Service": {
				"powerDeliveryMW": 0.0,
				"solarPowerCapacityMWhYear": 0.0,
				"biomassCarbonImpact": "",
				"hydroCaptureType": "",
				"powerStorageType": "",
				"gridStabilization": "",
				"powerGenerationMW": 0.0,
				"geoThermalPowerCapacityMW": 0.0,
				"sustainabiltyFocused": true,
				"electricUtilityService": true,
				"solarCaptureTechnology": "",
				"geoThermalCaptureType": "",
				"domain": "electric power",
				"solarPlantType": "",
				"windPowerCapacityMWhYear": 0.0,
				"windCaptureTechnology": "",
				"economicModel": "",
				"geographicalScale": "",
				"electricTransmissionService": true,
				"comment": "",
				"description": "",
				"nuclearPowerTechnology": "",
				"powerStorageMW": 0.0,
				"windPowerCapacityMW": 0.0,
				"nuclearPowerCapacityMW": 0.0,
				"solarPowerCapacityMW": 0.0,
				"windPlantType": "",
				"biomassPowerMWhYear": 0.0,
				"biomassCaptureType": "",
				"targetUsers": "",
				"hydroPowerCapacityMW": 0.0,
				"electricWholesalingService": true
			}`);

			const projectCompletion = new vscode.CompletionItem(`
			"Project": {
				"operationalDate": "",
				"usesNaturalResource": "",
				"usesBuiltResource": "",
				"description": "",
				"comment": "",
				"domain": "electric power",
				"knownAs": "",
				"projectState": ""
			}`);

			const initiativeCompletion = new vscode.CompletionItem(`
			"Initiative": {
				"comment": "",
				"domain": "electric power",
				"knownAs": "",
				"purpose": "",
				"decarbonizationPlan": true,
				"mandatedDecarbonizationTargets": "percent, date",
				"voluntaryDecarbonizationTargets": "percent, date",
				"description": ""
			}`);

			const regulationCompletion = new vscode.CompletionItem(`
			"Regulation": {
				"relatedRegulation": "",
				"description": "",
				"comment": "",
				"domain": "electric power",
				"knownAs": "",
				"statutoryTextLink": "",
				"purpose": ""
			}`);

			const placeCompletion = new vscode.CompletionItem(`
			"Place": {
				"knownAs": "",
				"description": "",
				"state": "",
				"city": "",
				"internationalRegion": "",
				"multistateRegion": "",
				"gridCoordinates": 0.0,
				"comment": "",
				"country": "",
				"county": ""
			}`);

			const governmentAuthorityCompletion = new vscode.CompletionItem(`
			"GovernmentAuthority": {
				"regulatoryAgency": true,
				"description": "",
				"comment": "",
				"knownAs": "",
				"level": "",
				"domain": "electric power"
			}`);

			// a completion item that inserts its text as snippet,
			// the `insertText`-property is a `SnippetString` which will be
			// honored by the editor.
			const snippetCompletion = new vscode.CompletionItem('Good part of the day');
			snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
			const docs: any = new vscode.MarkdownString("Inserts a snippet that lets you select [link](x.ts).");
			snippetCompletion.documentation = docs;
			docs.baseUri = vscode.Uri.parse('http://example.com/a/b/c/');

			// a completion item that can be accepted by a commit character,
			// the `commitCharacters`-property is set which means that the completion will
			// be inserted and then the character will be typed.
			const commitCharacterCompletion = new vscode.CompletionItem('console');
			commitCharacterCompletion.commitCharacters = ['.'];
			commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');

			// a completion item that retriggers IntelliSense when being accepted,
			// the `command`-property is set which the editor will execute after 
			// completion has been inserted. Also, the `insertText` is set so that 
			// a space is inserted after `new`
			const commandCompletion = new vscode.CompletionItem('new');
			commandCompletion.kind = vscode.CompletionItemKind.Keyword;
			commandCompletion.insertText = 'new ';
			commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };

			// return all completion items as array
			return [
				entityCompletion,
				serviceCompletion,
				projectCompletion,
				initiativeCompletion,
				regulationCompletion,
				placeCompletion,
				governmentAuthorityCompletion,
				snippetCompletion,
				commitCharacterCompletion,
				commandCompletion
			];
		}
	});

	const provider2 = vscode.languages.registerCompletionItemProvider(
		'plaintext',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {

				// get all text until the `position` and check if it reads `console.`
				// and if so then complete if `log`, `warn`, and `error`
				const linePrefix = document.lineAt(position).text.substr(0, position.character);
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

	context.subscriptions.push(provider1, provider2);
}