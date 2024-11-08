module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))