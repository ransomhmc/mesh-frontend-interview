export function getSignalingUrl(peerId, roomId)
{
	const port =
		process.env.NODE_ENV !== 'production' ?
			window.config.developmentPort
			:
			window.config.productionPort;

	const url = `wss://conference-ken.meshub.tv:443/?peerId=${peerId}&roomId=${roomId}&jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lc2h1YiIsInBhc3N3b3JkIjoic3VubnkxMjM0IiwiaWF0IjoxNjA4ODc5NTU5fQ.32rug_3C63sZbrkGgt579pwANeeC3XAsz68iMX-HF40`;

	return url;
}
