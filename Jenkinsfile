@Library('global-pipeline') _

GlobalPipeline() {
	dockerImage = "nephren-ui-revamp:latest"
	projectName = "nephren-ui-revamp"
	appPort = "8000"
    networkName = "nephren-ui"
    buildArgs = [
        VITE_GOOGLE_TAG: "${this.env.VITE_GOOGLE_TAG}",
        VITE_NEPHREN_BLOG: "http://blog.nephren.xyz",
    ]
}
