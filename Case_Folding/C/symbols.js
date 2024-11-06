module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))