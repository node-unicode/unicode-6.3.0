module.exports=JSON.parse(require('zlib').gunzipSync(Buffer([31,139,8,0,0,0,0,0,0,3,45,152,81,182,220,32,12,67,55,148,143,49,54,96,175,165,167,251,223,70,117,69,63,162,78,99,148,65,152,65,202,251,115,246,119,206,119,238,119,250,59,243,221,223,119,227,187,235,187,249,221,250,238,254,238,249,238,253,110,127,119,190,254,125,29,95,175,175,243,235,250,122,127,125,190,190,95,247,215,243,205,239,11,149,99,150,174,212,85,186,182,174,163,235,234,106,93,243,173,223,79,87,232,90,186,82,87,233,218,186,142,174,171,171,117,105,92,104,92,104,92,104,92,104,92,104,92,104,76,104,76,104,76,104,204,210,152,165,49,75,99,150,198,108,213,183,106,71,247,143,238,29,113,164,111,73,221,146,182,37,101,75,186,150,84,45,105,90,82,180,164,103,73,205,146,150,37,37,75,58,150,52,44,205,127,105,238,75,243,78,205,57,53,223,212,92,83,243,76,205,49,53,191,212,188,50,182,174,171,107,190,212,92,82,243,200,165,123,75,247,150,238,165,198,165,184,41,110,138,155,226,150,238,149,238,149,238,149,238,149,238,109,221,219,186,183,117,79,58,82,58,82,58,82,58,82,58,82,58,82,58,82,58,82,58,82,58,82,58,82,237,73,53,39,181,246,169,198,164,218,146,210,146,210,146,210,146,163,251,234,71,74,79,170,31,137,30,245,161,164,169,212,135,82,15,74,186,74,186,74,235,95,210,86,90,243,146,182,146,182,210,154,151,214,187,180,214,165,117,46,233,43,233,171,165,123,210,86,169,103,164,238,73,95,165,238,167,158,145,122,190,52,150,244,149,52,213,86,125,171,38,93,37,93,181,85,63,226,29,221,215,22,44,109,192,210,246,43,109,190,210,214,43,109,188,82,127,74,253,41,245,167,212,159,146,166,146,166,146,166,82,127,74,122,74,251,170,164,103,75,203,86,127,182,180,108,105,217,210,178,165,99,171,71,91,90,182,246,206,150,142,45,29,91,58,182,116,236,165,123,75,247,164,99,75,199,86,143,182,52,108,245,104,171,71,91,243,223,234,209,150,134,173,30,109,245,104,171,71,91,122,182,122,180,165,101,75,203,86,143,182,122,180,213,151,173,249,111,205,127,171,55,91,125,217,234,203,150,134,173,222,108,233,216,210,177,165,99,75,199,150,142,78,126,60,250,151,223,148,238,143,52,140,230,63,250,61,204,143,255,247,55,210,48,250,29,140,250,49,210,49,234,201,72,203,104,207,77,80,215,79,79,154,70,123,111,164,107,212,159,145,182,81,143,70,250,70,251,112,164,113,180,23,71,189,26,233,28,245,107,164,117,212,175,145,222,209,60,70,154,71,125,27,105,25,173,255,104,111,141,52,140,230,62,154,223,104,238,195,28,53,247,209,220,71,61,24,245,96,244,27,25,126,219,63,53,65,176,128,2,14,224,194,8,130,130,52,8,54,112,1,170,154,183,128,234,162,186,224,46,134,44,30,176,24,183,60,142,167,36,223,145,48,18,70,194,72,24,9,35,97,36,140,132,145,48,10,70,193,40,24,5,163,96,20,140,130,81,48,10,70,193,216,48,54,140,13,99,195,216,48,54,140,13,99,195,216,48,54,140,3,227,192,56,48,14,140,3,227,192,56,48,14,140,3,227,192,184,48,180,91,34,212,58,193,2,10,56,128,198,5,82,3,149,129,192,64,91,32,43,80,20,136,9,116,4,18,130,217,7,19,15,230,28,199,64,149,47,15,190,55,248,202,184,20,46,133,75,225,82,104,10,77,161,41,52,133,166,192,137,238,227,220,103,185,15,114,159,226,28,225,193,249,29,28,222,193,201,29,28,219,193,153,29,28,216,193,105,29,28,215,193,121,29,28,214,193,73,29,28,211,130,13,80,160,171,11,149,11,149,11,149,11,149,11,149,11,149,11,149,11,149,11,149,11,149,11,149,139,166,112,228,7,103,126,112,232,7,167,126,112,236,7,231,126,112,240,7,39,127,112,244,7,103,127,112,248,7,167,127,112,252,7,231,127,96,0,129,3,4,22,16,120,64,96,2,129,11,4,54,16,248,64,96,4,129,19,4,86,16,120,65,96,6,129,27,8,40,160,60,81,158,108,111,44,32,240,0,65,0,12,97,219,226,7,130,13,48,152,109,139,55,8,96,32,63,217,182,248,132,0,6,11,145,108,91,60,67,0,131,37,73,182,45,254,33,128,193,226,36,219,22,47,17,192,96,153,146,109,139,175,8,96,176,96,201,182,197,99,4,48,88,186,100,219,226,55,97,3,96,137,5,23,192,7,56,188,89,108,65,0,120,2,7,57,203,46,128,113,96,112,168,211,0,1,140,11,131,3,158,86,8,96,92,24,28,246,52,69,0,131,115,127,93,24,156,254,171,97,224,1,171,97,224,4,171,109,63,48,26,6,174,176,26,6,222,176,6,6,14,177,6,198,224,73,50,186,123,244,60,193,2,10,56,128,146,205,25,10,67,97,40,12,5,181,251,94,181,91,176,128,2,8,67,63,10,65,33,40,4,133,160,16,20,22,133,69,97,81,88,20,22,133,164,144,20,146,66,82,72,10,69,161,40,20,133,162,80,20,54,133,77,97,83,216,20,54,133,67,225,80,56,20,14,133,67,129,248,118,73,111,151,240,118,157,221,136,110,23,229,23,229,23,229,23,229,23,229,23,229,23,229,23,229,23,229,23,229,141,242,70,121,163,188,81,222,40,111,148,55,202,27,229,141,242,70,121,163,188,81,222,40,111,148,55,202,27,189,173,141,46,224,191,232,109,244,54,122,27,189,141,222,70,111,163,183,209,219,232,109,244,54,122,27,189,141,222,70,111,163,183,209,219,232,109,244,54,122,27,189,120,234,197,84,5,20,208,219,232,109,244,54,122,27,189,141,222,70,239,160,23,251,189,248,239,197,124,47,238,123,177,95,1,5,244,226,188,23,219,189,120,238,197,112,47,110,123,177,218,139,207,222,161,211,184,236,197,98,181,174,134,13,48,68,191,90,1,227,244,171,189,131,232,209,175,86,75,207,167,227,79,112,245,139,18,192,61,112,209,134,29,11,224,94,184,168,196,158,47,254,44,128,129,182,25,127,130,59,112,81,57,3,215,82,135,36,47,109,141,49,247,79,2,5,1,44,64,217,30,255,109,172,183,113,221,198,112,27,35,109,140,180,49,210,198,72,27,35,109,140,180,49,210,198,72,27,227,107,140,175,49,190,198,248,26,227,107,140,175,49,190,198,248,4,60,229,242,148,11,227,194,184,48,46,140,11,195,239,28,228,163,31,239,29,63,82,210,143,119,143,31,111,31,63,222,63,126,188,129,252,120,7,249,241,22,242,107,24,36,171,223,192,24,24,3,99,96,12,140,129,49,48,6,6,171,161,136,2,4,176,128,4,10,216,192,1,46,208,0,12,86,45,88,53,121,47,192,184,96,92,80,93,84,23,213,197,243,22,207,91,140,75,10,44,39,206,46,128,150,208,72,130,216,187,128,7,176,216,88,185,0,238,134,187,25,204,74,6,43,137,159,11,120,20,43,137,149,11,40,248,53,141,101,194,207,5,208,88,166,96,153,112,246,38,75,55,65,90,16,128,238,145,115,5,27,56,192,5,92,208,67,73,190,130,0,22,144,0,12,102,69,22,22,192,216,48,54,140,75,222,28,135,74,125,226,117,99,120,223,16,44,32,129,2,54,112,128,11,52,0,131,224,91,36,95,94,71,134,247,17,1,12,18,48,175,37,2,24,132,224,34,5,243,138,34,128,65,16,230,77,37,94,24,8,108,41,94,38,8,140,41,94,52,8,172,41,94,66,136,245,242,152,35,18,246,20,47,47,4,6,21,47,54,4,22,21,47,61,4,38,21,47,68,4,54,21,47,75,4,70,21,47,82,4,86,21,47,89,4,102,21,47,96,4,118,21,47,103,4,134,21,47,110,4,150,21,47,117,4,206,21,47,124,8,205,29,115,103,28,15,157,15,127,97,116,76,252,165,209,105,241,183,141,14,141,191,107,124,161,210,220,48,247,60,52,247,152,123,94,210,244,120,175,76,122,77,210,171,145,94,141,244,106,164,87,35,189,14,105,237,105,45,57,239,179,159,105,21,233,249,231,188,228,234,232,234,217,150,231,89,158,97,121,110,229,89,209,108,208,213,112,53,92,93,47,246,186,234,168,92,206,202,229,176,92,78,203,229,184,92,206,203,229,192,92,47,49,191,200,252,63,51,187,250,82,179,99,115,57,55,151,131,115,109,87,183,171,219,85,175,82,121,149,234,188,192,237,170,247,79,121,231,148,247,76,121,125,202,43,83,94,153,242,222,40,239,138,242,126,168,126,105,221,85,175,88,185,155,219,125,228,189,149,184,245,51,46,99,25,223,125,167,47,231,168,237,12,181,157,159,246,125,249,204,85,103,166,237,188,180,157,149,182,115,210,238,151,220,92,117,54,218,227,234,184,58,78,105,63,103,186,159,243,220,207,89,110,61,116,154,91,30,147,30,147,47,243,185,154,174,166,171,229,106,185,90,174,150,115,93,63,124,201,206,57,208,115,184,158,195,245,28,174,231,208,254,246,246,183,183,87,131,212,65,10,124,89,208,213,112,53,92,245,95,38,218,127,155,104,255,117,162,61,231,246,156,219,115,110,207,185,243,101,72,87,61,231,246,156,219,115,110,207,185,61,231,246,156,201,36,36,77,87,183,171,251,101,79,87,157,132,219,157,106,119,170,29,104,219,97,182,29,100,219,29,233,151,98,95,130,125,233,245,37,87,199,212,118,68,237,121,119,218,233,213,201,213,26,199,26,199,26,199,26,9,28,199,137,252,56,146,31,103,242,227,80,126,156,202,143,99,249,113,46,63,14,215,199,233,250,56,94,31,231,235,227,128,125,54,127,191,2,203,184,141,199,120,141,109,244,72,125,59,24,198,101,52,119,153,187,204,93,230,46,115,151,185,203,220,52,55,205,77,115,211,220,52,55,205,77,115,211,92,245,229,28,126,5,96,24,151,49,141,101,220,198,99,188,198,199,26,240,154,123,205,189,230,94,115,175,185,215,220,107,238,53,247,154,123,205,109,115,219,220,54,183,205,109,115,219,220,54,183,205,109,115,219,220,49,119,204,29,115,199,220,49,119,204,29,115,199,220,49,119,230,239,63,148,182,180,60,137,21,0,0])))