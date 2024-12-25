@Library('global-library')

GlobalPipeline([
	dockerImage: "nephren-ui-revamp:latest",
	projectName: "nephren-ui-revamp",
	appPort: "3000",
	buildArgs: [
		VITE_GOOGLE_TAG: "${env.VITE_GOOGLE_TAG}"
	]
])
