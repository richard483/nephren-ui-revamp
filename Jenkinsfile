@Library('global-pipeline') _

// GlobalPipeline() {
// 	dockerImage = "nephren-ui-revamp:latest"
// 	projectName = "nephren-ui-revamp"
// 	appPort = "7000"
//     networkName = "nephren-ui"
//     buildArgs = [
//         VITE_GOOGLE_TAG: "${this.env.VITE_GOOGLE_TAG}",
//         VITE_NEPHREN_BLOG: "https://blog.nephren.xyz",
//     ]
// }

KubePipeline() {
	dockerImage = "nephren-ui-revamp:local"
	projectName = "nephren-ui-revamp"
	appPort = "7002"
    networkName = "nephren-ui"
    buildArgs = [
        VITE_GOOGLE_TAG: "${this.env.VITE_GOOGLE_TAG}",
        VITE_NEPHREN_BLOG: "https://blog.nephren.xyz",
    ]
}
