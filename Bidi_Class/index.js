module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('H4sIAAAAAAAAA+2cTY8ctxGG/8ueeWgWP5p9jB0bCGDLRmTAB8MYjKTOamDtzKI1CpB/H3SvbO92PbWqVjuJD7kNOMUmWWR9vVXkT10Yws0Xlw/nN8fpX4cX44frdHx3E7oQw83L8fZuPF8PL8f743S8XqaP7d8fp+PtdLx/q/6xevz49nQdDy/vj6/HT3wj82zSHzCqhJvvrm/HafXdrz5Ml/vxeD78ME53p/Ov/QtQx0fU68G+vNzdXXQz04tB3z3q8OLD3avxua9XmKHUcPPN+I/r4YfL4e+n27fXTYQZCKt5PIwNEbuHwSM1ZjZ3hWYYYSW015HnRaRiTkCsHXJNK33iUD35oupNR1ISENJ0En0RmZ8HJ0N7+iLtkHgJCxAOTt7GngijhJsXl/P7++Pr0/n28O1x+uXjOXItUc9csK9mZLHOoG+3FF2EvjFIB43NeyZi1t2XbQWOxdIU7RCSbhQ4FzEkfahoRTTP/EREHotjDLnwZMPN8sH5y/MIH9uclHxk9lHS6C1Ir0jLLASrthjnxr9Mx1en17/piGgdsI9034zX66h01lNtRtS2nqYPg8QhT0R1f9g8/U1jnzrFgM48F4+H+5068WJxMFqtIRc8L7KjLrY8c6jITjq/aXgW0sG2YH8cKenu3XKmFa2ENtBnTaFczyqHnECsBosDitLwHJT0idHZKec8IaJMbkrScRIi6IkgupFHEhipFuL8skmrxlJ4m6OxqkKG3dx7JyXZ4eamNE603x6S6WTRRSNNRtJUndrEg9klX0WoszH0qi0B22TDVpDMGJPccTgatGVkGW0t7ZeESBOyjSi6wQZ1sbW7mrCO0GhhG/aY6HxtvO9+nmaD06QtEo7VwxmjU9tvEUzDT9YLjRu2jRxdcud3bZvWp1tEkwzKliV6BVaod8HuhiQa1oCjgfK/VKD7dmmPCvxPqNrmHn23stU7Ef1rJy2ZUNy0HCScue+8U18aN5ExIZZZS/YNwwz3imSlRecQ6ZuEJdphmA5aKs4ezgDrTMRFyL3SopcsRM6lNNmzjSh6PR51OkZ1iy7Uy2wBMS+X3P93mG7pO/fYTvb0QNm7bZeb4ajmyaD5uZtpu7z+NH/Sqwu8/nTbwjTSx9pe8okEW5CCkDD60ESCItm9zMg0Fnl2hWG/G+2OhKxJ/dqfw1EbIuXwhMNkUPiJBItZ7aUj+0NbjCiy02B75+cHBmgnCNLzu9EC6pJXQ+OgeiLFkYQkyIQqjGB2F1CzCdLR5ozUcKLgOJownSsCMjOJBGjRkowYmY+JXwnopUZDVDNNy88Uhqj9TPFaiW6BKZ2kdHYN6NRIafs03RbB55nS8IZA+OFQyNCRkiioYFJPSpRgPR8kyH3Bg2HC5IvL9s0GeBtD8fKhkqvCx020D5L4DM4aTIVBDeYZOXMEuVOsb6GxdYouhYaoDMgEG0j0itB5syRVy9TA3TGOEp6qET5Q/+IXatJ+nBDY59UZmbAt2LLf0KLzUPmcRqM8gXmlC2wwVKyhaXY10iR+n6KEHnSlIafesN+PHG8BdUhQaUYZ9EHCrDuYCfQvY8h6kZlURyXwNYWE9T1euM8PdEooG+ypU0itDJv/2NH0OZiyDAEjcr4EYzUa9ZY2MTyfDcHnPr+Zv+l3fLTUZo5OOONOQm+IMu2pWVmxw2wYHNm3IfsSW2aVomvxjU8Ty4OXd4k8uBQKwAYZbG6zbZPmiJ+UTb4fPvDrMvSNBuJeopMvDEnPkT2lvPS8hGv6iJAgTh8aw21QoiqhkF9nuEWfXYPrHYP6YhjB/qmen4E6rgjFPUHtGzzU76xChWSWaBNbl9+Hx2WPRjGVv8x/NdDhq7tX45s3p/MtDan+/f5yf/jraRpfX0+X8/Hd4evLdHe84oe/++c4Tac3I3539SeVPRbb2TZuCNBXxEibrRhWDAd6vai/vb+8O155TU//+/o0vb8eXl6ny/l29deaiY/+tSv4XZXqy/mnakPrOoRRFo/+077vMnK2OBa4zRIX1EJ7kv7y7l1XFqiWZY+iI//LOJufPe4eOsOiWiLo5aNRBONij/tCA/HRimh1mJ108P106ebNolXl80Afqninw7vzg+ZBlMX/WBuqQnjB7JPQpITFGRyVLuRi8Ee7nyT1UvDyDMaYpemFJQJHYq0hI7KIACbAnyx8fshbn8OCJQHg0vlRZGASZgWz5dHqdQ8I8f6Z2pKB8QNE1kiQYoBTFCUI3HuSulQJ0bWXlYNAugixFzrtpAL8cS5payOL46IjKW0UZZg4kosTNO3Ba1W1IBbS6GlRkFoL6PmUJRuoTwUm7siXZ/gGL3gacLzeHOQGOrcGUqL5hvovGgdQ74/3AqL7TmMtDRRWN0MIZJYG2OQyr6AiNKF5NYQUvfEjbJQgC59J5aLj6JQaqA7oraotf2m1luTG2HHsvNqGgmqQO6wa7o26cP8tEH91tWEF/SlvXxRB6Jd9TaFy0kt/ts0GzbeogTRCXTJ5Pjw7k2NiAojumgus+I7LbTUlvEYiaF8yb5NVJVax/gT+QXkwJuSfuX/oPJReymGD9OyBvo0CKEDz896kh9f33lIstDdtAAzJdG6skbwciaR3GQ7WbW43P5e5fGmPyO1Tz1ZCPMYeVIlQSJMDvJuQQ2uQnZuHgzrZRqyhNG5BVNZOIxKpgSvoS7aRLqTDBCJcu+U2ntLMp/Xd0z6kSte2wTWuizO3opRQdGN+WCbdcVa4ezRq4qhSgnJEw6KQvDCxgZxpUi4UMr5qPKBh35x/9jmUTwOsm95Toece9LMAM3qiW8WqOPn/Sz+fIsSqnkZJ88/X/pS1Ss8cBQyOzJc/NMwVaSvxNm8kpsQAASrf64MMtVAVRsohgqkgmM0Lm2fCChJiO73mRiGgqRj4A7oDySioIuPXU4BuxGxQ2lESueyRPIVM3M+Cj9bwTaqS5xO8skr0SMJDBZXDziXo/OA5qM6DbqsPwAB9EyV8RUgeQs0LlLtuhanXjA4GX4ch/7JY1UeweGIIvIuT7Qo5dm9X/RtwuV+s83p0aYvXoFhPwDq8FiL8qo+e0TxQr1dfUlnkZvWqTGqm2qCQAz1frt4icRLMtoA0Vqtsfx/azB+lyIFwAQR7qhHHwVWSLXVuBFZEUkfVDA+JAcY7MnpZuNYYh47w5/03dLz3oPzfbBjIp9JC68Eg50L4cMTXSoYyV0z2YISS1BIKZEWjSKJsaeSsXvVfMIk1N6yim/dKMjgkHb2aJqFiMZizCnI5sFTc4a/a41o4MNWWwAMck3Ko5LyaFXpr36/V0LSCxmsFMQvevgh0UKzHUFSb76XAyO4oDUzQCeQf+B4L5Xvx1QoipGn77irSVd8YElene51guLzzpyMkN7NQjFdqWs6FfnWtdz3FtnCd4mBNR2+70cjYWbVVaMvOvtymMZidC/6D27xzIZ7SZhKdez9oM6MepSBXEVCBzgLIifTdEvHo6oQOKmKEMsdCj70iZaTG9JDR06LE4SUW1FN5BfhHfaHodnYuKIrXlFgX0+elhnC91AJoTVzuMOkbP8jpBBAIISCRnsadh/ehd/PNPixFgIlWOD9AGIVKiGPuafmZwKrciLS0OUcPHGgtZOkpgzY/wAGxyvziFz39VFPJoWR4bEQkd4kBydSFAUtq5whQMqXqa+nyXLZQEpaXU/vP/waKMM+izF0AAA==','base64'))))