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
	dockerImage = "nephren-ui-kube:latest"
	projectName = "nephren-ui-kube"
	appPort = "80"
    externalEndpointsIp = "10.10.10.8"
	kubeNodePort = "30008"
}
