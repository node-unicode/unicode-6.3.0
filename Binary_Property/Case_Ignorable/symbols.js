module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,93,154,75,178,236,184,110,69,231,82,29,119,28,142,164,248,119,15,36,136,73,248,19,158,132,231,111,61,23,151,94,236,219,168,27,27,39,51,197,181,73,17,0,165,250,143,191,254,229,175,127,253,235,223,222,255,254,253,253,239,191,223,255,254,231,253,239,63,255,247,247,179,129,112,68,92,177,10,162,35,238,151,159,245,67,36,196,131,200,136,130,168,136,134,232,136,239,130,19,97,136,133,216,8,71,28,196,69,125,54,60,27,158,13,207,134,103,195,179,225,217,240,108,120,54,60,27,158,13,207,134,103,195,179,225,217,240,108,120,28,30,135,199,225,113,120,28,30,135,199,225,113,120,28,30,135,199,225,113,120,28,30,135,199,225,113,120,14,60,7,158,3,207,129,231,192,115,224,57,240,28,120,14,60,7,158,3,207,129,231,192,115,224,57,240,28,120,2,158,128,39,224,9,120,2,158,128,39,224,9,120,2,158,128,39,224,9,120,2,158,128,39,224,137,203,147,127,63,68,66,60,136,140,40,136,138,104,136,142,24,136,137,48,196,66,108,132,35,14,2,158,4,79,130,39,193,147,224,73,240,36,120,18,60,9,158,4,79,130,39,193,147,224,73,240,36,120,18,60,9,158,7,158,7,158,7,158,7,158,7,158,7,158,7,158,7,158,7,158,7,158,7,158,7,158,7,158,7,158,7,158,7,158,12,79,134,39,195,147,225,201,240,100,120,50,60,25,158,12,79,134,39,195,147,225,201,240,100,120,50,60,25,158,2,79,129,167,192,83,224,41,240,20,120,10,60,5,158,2,79,129,167,192,83,224,41,240,20,120,10,60,5,158,10,79,133,167,194,83,225,169,240,84,120,42,60,21,158,10,79,133,167,194,83,225,169,240,84,120,42,60,21,158,6,79,131,167,193,211,224,105,240,52,120,26,60,13,158,6,79,131,167,193,211,224,105,240,52,120,26,60,13,158,206,88,157,177,58,215,25,124,52,248,104,220,209,203,200,136,130,168,136,134,248,190,60,16,23,181,50,135,117,38,196,131,200,136,130,168,136,134,232,136,129,248,46,104,136,133,216,8,71,28,196,157,132,106,63,4,60,6,143,193,99,240,24,60,6,143,193,67,11,81,13,30,131,199,224,49,120,104,51,170,193,67,191,81,105,42,42,77,69,165,169,168,52,21,149,166,162,210,84,84,154,138,74,83,81,105,42,42,77,69,165,169,168,52,21,149,166,162,210,84,84,122,137,74,11,81,105,33,42,157,67,165,115,168,52,12,149,34,213,168,32,141,10,210,168,32,141,10,210,168,32,141,244,222,72,239,141,244,222,72,239,45,125,95,174,136,134,232,136,129,152,8,67,92,131,141,212,212,72,32,173,124,31,57,226,32,238,36,52,18,72,35,129,52,18,72,35,129,52,18,72,35,129,52,18,72,35,129,52,18,72,227,230,111,36,144,70,2,105,36,144,70,2,105,36,144,70,2,105,29,30,122,164,70,143,212,232,145,26,61,82,163,71,106,244,72,141,30,169,209,35,53,90,163,70,107,212,104,141,26,173,81,163,53,106,180,70,141,214,168,209,26,53,90,163,70,107,212,232,136,26,29,81,163,35,106,116,68,157,66,223,185,1,58,21,173,231,239,47,15,34,35,10,162,34,26,162,35,6,98,34,12,177,16,27,1,15,21,173,83,209,58,183,77,167,162,117,42,90,167,162,117,42,90,167,162,117,42,90,167,162,117,42,90,167,162,117,42,90,39,147,116,50,73,39,147,116,50,73,183,239,203,192,147,73,58,153,164,147,73,58,153,164,147,73,58,75,208,89,130,254,45,1,77,105,167,41,237,52,165,157,166,180,211,148,118,154,210,206,126,239,52,165,157,134,115,176,61,7,219,115,176,61,7,219,115,164,239,203,11,177,17,142,56,136,11,54,232,190,6,221,215,160,251,26,116,95,131,238,107,208,125,13,186,175,65,247,53,232,190,6,221,215,160,251,26,116,95,131,238,107,208,125,13,118,238,96,231,14,118,238,96,95,12,246,197,96,95,12,246,197,96,95,12,142,12,131,13,50,206,119,29,6,101,117,6,171,51,88,157,193,234,12,86,103,176,58,131,213,25,172,206,96,117,6,71,134,193,145,97,112,100,24,28,25,198,183,130,28,25,6,71,134,193,145,97,112,100,152,228,249,73,158,159,228,249,201,70,155,236,175,201,222,153,236,157,201,222,153,236,157,201,222,153,236,157,201,222,153,236,157,73,162,158,100,227,73,54,158,100,227,73,54,158,100,227,73,54,158,100,227,73,211,53,105,186,102,231,130,3,65,101,156,212,193,73,29,156,28,165,39,5,113,114,4,158,228,204,73,206,52,230,199,152,31,99,90,140,105,49,166,197,176,108,88,54,170,149,149,239,87,119,44,99,18,140,162,96,253,251,203,245,110,216,177,193,16,248,50,124,25,190,12,95,134,47,163,208,27,133,222,120,50,96,88,54,44,27,150,23,150,23,78,23,233,116,97,121,97,121,113,39,44,238,132,133,193,197,194,45,214,107,177,94,11,59,139,39,30,11,158,77,14,223,12,186,201,225,155,91,107,51,207,155,121,222,100,227,205,132,111,38,124,195,179,185,163,54,96,27,176,13,216,102,122,55,125,212,230,233,202,230,129,201,254,80,153,186,205,212,57,243,227,204,143,151,239,163,130,184,63,119,70,119,70,119,158,210,56,143,89,156,199,44,206,99,22,167,115,56,84,216,67,61,61,212,211,147,191,239,116,196,64,76,196,29,235,48,171,135,89,61,204,234,161,216,157,242,125,121,33,54,194,17,119,225,14,125,239,161,203,61,116,185,135,46,247,208,229,30,186,220,67,151,123,104,110,15,107,113,88,130,195,221,123,120,174,117,152,177,195,115,173,179,191,95,93,176,160,126,5,245,43,152,168,96,126,130,105,9,246,96,244,7,145,17,5,193,207,123,67,112,157,206,88,253,187,160,33,22,98,35,32,236,119,234,98,252,16,96,176,83,130,83,91,112,106,11,14,107,193,97,45,6,23,28,223,5,239,109,28,147,43,115,106,11,78,109,193,169,45,56,181,5,167,182,224,212,22,156,218,130,195,90,112,88,11,14,107,193,97,45,56,172,5,135,181,224,176,22,28,214,130,195,90,112,88,11,14,107,193,97,45,56,172,5,45,86,208,98,5,45,86,208,98,5,45,86,208,98,5,45,86,208,98,5,45,86,208,98,5,45,86,112,211,6,135,181,224,176,22,220,198,193,109,28,220,198,193,109,28,220,198,193,109,28,28,214,130,251,57,184,159,227,222,207,233,119,155,147,87,28,68,92,113,27,233,87,60,136,140,40,136,138,224,130,247,126,126,197,68,24,130,177,50,99,221,67,205,43,248,114,253,62,2,163,129,113,247,197,43,224,233,240,116,120,6,31,13,192,6,96,131,209,39,226,54,39,137,231,45,137,231,45,137,231,45,169,223,227,228,43,50,226,142,197,177,34,113,172,72,28,43,82,175,124,84,249,8,230,14,115,95,124,249,174,233,43,58,98,32,38,194,16,11,177,17,23,190,179,166,125,243,171,205,175,54,191,218,252,106,127,191,58,8,44,223,71,238,175,72,8,224,29,120,7,245,30,3,211,184,79,101,95,177,17,223,71,119,136,113,43,81,26,119,203,164,121,27,242,87,36,196,131,232,136,59,27,147,9,159,220,90,52,138,175,184,163,219,61,50,188,98,32,248,232,214,220,87,240,17,119,157,221,134,252,21,223,151,55,194,17,215,133,113,67,218,173,158,175,168,8,134,104,96,52,198,106,140,213,24,171,49,86,99,44,238,13,227,126,166,13,123,5,87,238,92,185,115,229,206,149,59,87,238,92,185,127,87,190,139,107,55,125,165,117,219,239,68,175,245,138,7,113,49,22,247,243,98,119,47,118,247,186,213,252,21,19,97,136,59,40,29,90,90,56,93,56,93,247,137,226,43,14,226,18,174,14,24,251,125,177,119,22,243,179,6,223,25,124,199,248,142,241,29,3,254,230,240,87,192,204,237,183,12,176,131,193,195,119,14,223,57,160,30,8,131,209,239,1,42,237,123,214,123,133,35,14,226,254,106,147,78,119,230,87,220,207,155,4,178,153,231,205,60,111,86,121,179,202,155,85,222,172,242,102,149,119,103,116,182,240,102,11,111,182,240,190,93,220,43,42,130,65,217,212,219,25,212,25,212,25,212,25,212,25,212,191,65,177,236,88,62,96,28,70,63,56,61,96,28,48,88,130,125,192,96,45,54,75,176,239,177,52,57,19,238,76,184,51,225,206,132,59,19,238,76,184,51,225,206,132,59,119,184,83,200,156,37,112,150,192,185,213,157,91,221,185,213,157,180,227,220,243,78,141,115,106,156,103,120,10,60,5,30,54,8,45,122,162,69,127,5,60,5,158,2,79,129,167,192,83,224,41,240,20,120,10,60,5,158,2,79,133,167,194,67,217,114,202,150,87,120,42,60,100,81,175,240,144,78,157,116,234,164,83,39,157,58,233,212,73,167,78,58,117,74,173,147,87,189,193,67,130,229,120,242,10,120,72,185,78,202,117,82,174,147,114,157,148,235,164,92,103,55,249,4,108,2,70,87,224,19,176,9,152,1,102,128,145,109,156,108,227,100,27,39,219,184,1,70,202,117,242,143,147,127,220,0,35,17,185,193,99,240,24,60,6,207,130,103,193,179,224,89,240,208,93,56,221,133,47,120,104,51,156,54,195,105,51,156,54,195,105,51,156,54,195,105,51,124,193,179,224,217,240,108,120,54,60,27,158,13,207,134,135,118,197,55,60,27,30,26,24,78,163,175,128,135,6,198,105,96,156,6,198,105,96,156,236,231,100,63,14,179,137,195,108,226,48,251,10,120,72,131,78,26,116,210,160,147,6,157,52,232,164,65,39,13,58,105,208,73,131,78,26,116,210,160,31,120,200,135,78,62,116,242,161,147,15,157,124,232,180,169,30,12,17,12,113,95,187,167,96,117,130,69,9,22,37,88,148,96,198,130,25,11,102,44,128,15,224,3,248,32,247,198,225,35,234,96,192,19,151,231,249,221,38,240,21,27,225,136,239,59,113,197,237,208,94,49,175,184,143,94,95,209,17,134,224,202,15,87,126,184,242,195,149,111,2,121,69,66,60,136,140,96,136,155,55,94,193,88,13,158,6,79,99,244,198,232,141,209,27,163,183,111,116,124,117,70,239,252,101,2,54,249,104,2,54,1,155,128,221,147,239,43,32,156,16,78,8,39,132,19,194,9,225,132,208,25,212,25,212,25,212,25,212,25,212,25,212,25,212,25,212,25,212,25,212,25,212,25,212,191,65,153,22,103,90,156,73,56,240,28,120,14,60,7,158,3,207,129,231,192,115,224,57,240,28,120,14,60,7,158,3,207,129,231,192,115,224,185,93,220,67,251,244,208,62,61,155,239,236,239,59,183,211,123,156,85,118,22,151,221,253,176,187,31,118,247,195,238,126,216,221,15,187,251,97,119,191,162,35,6,98,34,12,177,16,27,225,136,131,128,7,102,255,152,3,158,128,39,224,9,120,2,158,128,39,224,9,120,2,158,128,39,224,9,120,72,5,164,166,231,220,126,44,255,238,255,237,147,217,212,153,77,157,217,212,153,77,157,127,183,103,203,60,124,200,60,124,200,60,124,200,60,124,120,5,215,185,251,34,179,47,50,251,34,179,47,50,199,255,87,156,43,130,143,130,143,174,11,251,221,87,198,86,238,108,188,98,34,12,177,16,27,241,247,117,222,147,226,253,75,187,183,141,241,250,245,21,9,241,32,10,162,34,26,162,35,6,98,34,12,177,16,12,218,193,232,140,62,17,1,198,189,73,172,223,243,224,43,190,191,60,136,140,40,136,138,104,136,142,24,136,137,48,196,66,108,132,35,14,226,18,246,4,79,130,39,193,147,224,73,240,176,76,61,193,147,224,73,240,36,120,18,60,9,158,4,79,130,39,193,147,224,121,224,121,224,97,41,251,96,136,193,16,131,33,184,109,58,183,205,96,86,7,83,199,147,19,227,133,163,241,194,209,198,237,154,108,220,36,243,138,132,224,58,55,201,24,239,16,141,119,136,198,59,68,227,29,162,241,14,209,120,135,104,188,67,52,222,33,26,239,16,141,119,136,198,59,68,227,29,162,241,14,209,120,135,104,19,102,158,219,24,207,109,94,49,17,134,88,136,141,184,99,241,206,206,120,103,247,10,126,94,248,121,225,231,133,159,151,239,231,7,113,81,231,61,230,24,175,252,108,14,254,50,190,191,220,201,156,183,127,126,5,118,22,60,11,158,5,207,98,244,219,71,153,225,212,112,106,56,53,156,26,78,237,246,45,102,55,215,189,226,65,84,196,197,176,123,66,52,222,226,25,239,236,204,214,39,248,57,46,236,158,2,94,209,17,3,193,232,11,248,13,134,67,200,157,96,220,9,22,92,57,184,242,45,28,239,245,42,98,32,254,254,85,172,187,155,98,93,194,87,100,68,65,84,68,67,116,196,64,76,132,33,22,98,35,24,116,125,131,198,21,183,37,126,197,223,78,227,220,164,247,138,239,47,15,34,35,10,162,34,26,162,35,6,98,34,12,177,16,27,225,136,131,184,132,39,49,232,3,216,3,216,3,216,243,125,7,176,7,176,7,176,202,151,43,31,221,114,28,1,115,48,122,220,124,24,145,249,203,125,82,17,209,17,147,143,38,215,185,105,39,226,102,182,87,112,157,91,16,125,252,126,239,191,244,6,111,248,188,255,50,213,95,248,104,152,53,172,26,54,13,183,134,127,12,116,52,12,9,239,83,157,47,156,26,154,134,223,111,203,251,239,254,167,133,255,15,255,121,169,191,195,169,161,105,184,52,220,26,186,134,71,67,197,184,203,244,133,74,85,30,13,179,134,69,195,170,97,147,112,232,64,67,7,90,122,229,165,87,94,122,229,165,87,94,58,87,75,231,106,201,108,248,239,167,97,210,80,252,250,45,67,95,56,52,156,26,154,134,75,67,197,120,142,134,178,40,60,117,252,66,133,204,10,153,179,134,50,117,174,211,238,58,237,174,51,201,83,157,47,84,191,58,207,174,243,204,211,158,47,220,26,170,253,245,217,175,255,216,26,182,52,116,9,215,79,195,164,225,163,97,214,176,104,88,53,196,111,90,239,191,188,101,38,156,63,13,147,134,143,134,89,195,162,97,213,176,105,168,24,115,104,56,53,52,13,151,134,91,67,215,240,104,136,223,252,255,139,210,186,134,67,195,41,97,207,26,22,13,171,134,77,67,29,168,235,64,253,143,129,76,195,165,225,214,208,53,60,26,170,223,111,107,100,221,26,55,124,52,84,71,67,29,13,117,52,212,209,80,71,67,29,13,117,100,250,169,253,241,169,250,53,241,123,202,163,97,214,240,174,209,42,255,40,169,95,1,186,225,237,22,190,240,143,79,31,13,179,134,122,229,219,75,124,97,211,176,107,56,52,156,26,154,134,75,195,173,161,107,120,52,12,9,179,250,205,234,55,171,223,172,126,179,250,205,234,55,171,223,172,126,179,250,205,234,55,171,223,172,126,179,250,205,234,55,171,223,172,126,139,250,45,234,183,168,223,162,126,255,184,115,138,250,45,234,183,168,223,162,126,139,250,45,234,183,168,223,162,126,139,250,45,234,183,168,223,170,126,171,250,173,234,183,170,223,170,126,171,250,173,234,183,170,223,170,126,171,250,173,234,183,170,223,170,126,171,250,173,234,183,170,223,166,126,155,250,109,234,183,169,223,166,126,155,250,109,234,183,169,223,166,126,155,250,109,234,183,169,223,166,126,155,250,109,234,183,169,223,174,126,187,250,237,234,183,171,223,174,126,187,250,237,234,183,171,223,174,126,187,250,237,234,183,171,223,174,126,187,250,237,234,183,139,223,175,113,37,76,26,62,26,102,13,139,134,85,195,166,97,215,112,104,56,53,52,13,151,134,91,67,215,240,104,168,126,147,250,77,234,55,169,223,164,126,147,250,77,234,55,169,223,164,126,147,250,77,234,55,169,223,164,126,147,250,77,234,55,169,223,164,126,181,254,186,214,95,215,250,235,90,127,93,235,175,107,253,117,173,191,174,245,215,181,254,186,214,95,215,250,235,90,127,93,235,175,107,253,117,173,191,174,245,215,181,254,186,214,95,215,250,235,90,127,93,235,175,107,253,117,173,191,174,245,215,181,254,186,214,95,215,250,235,90,127,93,235,175,107,253,117,173,191,174,245,215,181,254,186,214,95,215,250,235,90,127,93,235,175,107,253,117,173,191,174,245,215,181,254,186,214,95,215,250,235,90,127,93,235,175,107,253,117,173,191,174,245,215,181,254,186,214,95,215,250,235,90,127,93,235,175,107,253,117,173,191,174,245,215,181,254,186,214,95,215,250,235,90,127,93,235,175,107,253,117,173,191,174,245,215,181,254,186,214,95,215,250,235,90,127,93,235,175,107,253,117,173,191,174,245,215,181,254,186,214,95,215,250,235,90,127,93,235,175,107,253,117,173,191,174,245,215,181,254,186,214,95,215,250,235,90,127,93,235,175,107,253,117,173,191,174,245,215,181,254,186,214,95,215,250,235,90,127,93,235,175,107,253,117,173,191,254,71,253,29,234,119,168,223,161,126,135,250,29,234,119,168,223,161,126,135,250,29,234,119,168,223,161,126,135,250,29,234,119,168,223,161,126,135,250,157,234,119,170,223,169,126,167,250,157,234,119,170,223,169,126,167,250,157,234,119,170,223,169,126,167,250,157,234,119,170,223,169,126,167,250,53,245,107,234,215,212,175,169,95,83,191,166,126,77,253,154,250,53,245,107,234,215,212,175,169,95,83,191,166,126,77,253,154,250,93,234,119,169,223,165,126,151,250,93,234,119,169,223,165,126,151,250,93,234,119,169,223,165,126,151,250,93,234,119,169,223,165,126,151,250,221,234,119,171,223,173,126,183,250,221,234,119,171,223,173,126,183,250,221,234,119,171,223,173,126,183,250,221,234,119,171,223,173,126,183,250,117,245,235,234,215,213,175,171,95,87,191,174,126,93,253,186,250,117,245,235,234,215,213,175,171,95,87,191,174,126,93,253,186,250,61,234,247,168,223,163,126,143,250,61,234,247,168,223,163,126,143,250,61,234,247,168,223,163,126,143,250,61,234,247,168,223,163,126,79,252,245,95,255,7,172,102,49,103,58,74,0,0])))