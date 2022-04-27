// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { time } = require("console");
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const whitelist = [
    '0xb0fabe3bcac50f065dbf68c0b271118ddc005402',
    '0xb579160db92b6e9f92791ed3003625d97a4951cc',
    '0x6ffbb6c376d0cf590289671d652ae92213614828',
    '0x7453395417538bb459870402a800acf88d293df5',
    '0xa6e950aa70ebaaf99686a5d95afe8aca8b5e353b',
    '0xb495023d8eb9526d8ec346703f2cff12f2a6963d',
    '0x5d22db0ddc365dbdc0983441e2906d51855a142d',
    '0xc52d313ae152445c889c498b3b18d18a5a072ea9',
    '0x7c95c348aef18fec3857c62b160a0ecbc6cd973f',
    '0x863c7473e65b0d72a5f31f67d06f67cc5fa078dc',
    '0xc94d24961abdc547ee466b8563f86c3a1afa8bd4',
    '0xdcd49c36e69bf85fa9c5a25dea9455602c0b289e',
    '0xff33f5653e547a0b54b86b35a45e8b1c9abd1c46',
    '0x0282e055d3b2f7c0ad656952ac1bb989fb6d0086',
    '0x131a00d9602d269d9bba7aa04321a888ceac5db0',
    '0x3bd93be19256a9639ca808b49a2cfaac5076b5a8',
    '0x461e76a4fe9f27605d4097a646837c32f1ccc31c',
    '0x49bbef62cdf8b26f2d15c0ec1ac762058fd9c3c2',
    '0x563877b0509424182cb75d1250c062ccef36b425',
    '0x5b1b5d7f419c8c26a6ed51b46db09ae6376a82da',
    '0x6bb19408e2a2e82c8c218a5e6eb855a509132625',
    '0x74ae37b023f411ff80f3a98d1f4680f38f029e57',
    '0x7749876413881f2abf4a196a01bf5c0e49958bae',
    '0x77adbf2af1288d578375ba75e8a1e3bf6774e554',
    '0x84f45e7666b3fc4f86f2c8d35a195fb63a66fb4e',
    '0x8de3c3891268502f77db7e876d727257dec0f852',
    '0x9a7751ed3560d9a0ed0a33d6993a95d873023d8d',
    '0xa8e5958c11f2c50a35a233ac39a4cf26a10c3816',
    '0xa98b98942e3e82e459b6590d9882390f93692eb6',
    '0xb32e6c7189e6f8b1ebf54e1402837eadd7ae1e14',
    '0xbb030a0408edc41f3c61ba3f132c06e93eda68f4',
    '0xc3660ee9c357bf631af63621385dcf9d5cf2f301',
    '0xcc879ab4de63fc7be6aaca522285d6f5d816278e',
    '0xdab029d219386c859a888b99db7c9250cee687f7',
    '0xdaea12a973b47ebee7c8ff05937847f5464c5569',
    '0xdee3366e3e650ba12f2802b6c21a6cfbc2113391',
    '0xecf0545684a06a4ea7b9c2fb1b6c08f50436e9db',
    '0x032ed86570ab71851bfd4bbb790f3dcc59cbbd72',
    '0x29468f8ed7ca189531b69b4f51bb0e261164ea28',
    '0x34f4c58bd278fe92b32e05452ab695383779e938',
    '0x3ad2be51a1447c9ec8e5d7137bed57a399f871c5',
    '0x4ebce12ff36e8781b0c699eb92978abcc4556ce2',
    '0x5a411f084faa3259924a4764ff9b090c5780a159',
    '0x89557edf57c4ac779973e2c4e7ac8530eff69a1b',
    '0x96e0fd08cbcd2f8c9fa20557898464cb970c9a75',
    '0xb01928f4debedf23e0c1970949bf66f3bff1da9e',
    '0xd2da3a07bf4cd039d5f36d22f22b6fe04bd56a86',
    '0xd454c674801ce91f5468ba86d576ef0fe6212b44',
    '0x0530539d9546843c61166639d4362040b1107d05',
    '0x228baf69cdd1290d98d9590e772cbd7f1f75ff66',
    '0x34dbc749b67a340dd47d9d0a20253c7b85554fa1',
    '0x3624dbd5981710a26c0acd30d96863340b432f96',
    '0x636e31adee132e4ac5697eee40d7f9348ae7a15e',
    '0x6fe413b3c9093dd7c9585e81a7420acc14343cc1',
    '0x753944bd8bf6493289ede11530d98e41e1f8354e',
    '0x78b514bad0299826c1bc9409e5c3db7ece9ca404',
    '0x7e937d0d66a60c15a40badfa3a68d3ffd7905e16',
    '0x962a2880eb188ab4c2cfe9874247fcc60a243d13',
    '0x9fd8313cfcd184ea1eb70bf2bac8f9bfb07e6e37',
    '0xaf1de295a3ae5b8f08a01172ccefe137ad88b30d',
    '0xb11766a8c7329bdcbae6bf833b578559d385d37b',
    '0xb305f0c8a739c397d3f32d48b95500cbd1d3b28d',
    '0xb4c93d0a04d4b7966776cc2a0ba31b2c9bd40d18',
    '0xba8b2b711ff68c699729718d16589488f8043e75',
    '0xbb2c046d4278f914010148c77972f7fa3a4d86a8',
    '0xbc37255c44917127473ee7776425762e40e2bf27',
    '0xc3c8b9012b853e397e69df8d52514ebc1c4f8316',
    '0xddf169bf228e6d6e701180e2e6f290739663a784',
    '0xe4c35bdd306232050ecb3faad00e35df166ff016',
    '0xe97f659b949b152003d8c6f22de4430dd08d18f9',
    '0xea869669210a69b035b382e0f2a498b87dc6a45c',
    '0xeebbe1f4130af2f6143b35918370ff6aac89f610',
    '0xef9357e05c7675282cb63c9e55fec85a806ab072',
    '0xf4245fd40afe3be9165fb9036cd1b170bdfabe51',
    '0xf5fcaae203bd5dd81ef969c3fecc872f38aeccab',
    '0xf6d16557767f76c35bce496bc5414ebd70517cbd',
    '0xff1e908e05b4be5e98dd1177fc1b7a39df233d93',
    '0x05434766aa193349a3528b393725332985c95bc2',
    '0x0c281fa4ff23db7d88ef8a8611645afcfd4c7c3b',
    '0x0c8c97a7a61ca505676085b5f648888cb887aab5',
    '0x0f41207a457c15845607457653900d2ae439d251',
    '0x155b6485305ccab44ef7da58ac886c62ce105cf9',
    '0x1671ba83ce928f6df0c9973098db430bda4d214d',
    '0x1af27d61bf4de158e1109400ad31f69670e1cdde',
    '0x1d5c7762b24d6926276dbfc272883a9fc0eca8f7',
    '0x1e402aa87615e6af8fa49e454b81a263def84c69',
    '0x207247fe5d0cf073d89460bbe063bd72e88c4cf2',
    '0x22e024589ee456a0cd0f8a61c5e49330a72ff6f6',
    '0x2377eb3fc4366ae614cbe7848e20d55e6a83535e',
    '0x2bda28b8d384597cc5fdffbf9c3cb32789f600f8',
    '0x2c214951b9f9c66c9ce764e94775bf930720eac4',
    '0x2d45eb0dd68675e899578be4ca65997e7200fa9a',
    '0x2de5399d2a74b87bf2f735ae6c3fa9bb3619d43b',
    '0x312959e24862bdea6e2e93a73e0a5deeb9578f6a',
    '0x31ea2730a76c7d480bba0267eb91d02a3087ea88',
    '0x329b0f4597b15cd81d6f62dcf2ad6b3fe1d74d87',
    '0x35dd3014d7d45d52b94bfca749bcbd9e894dd851',
    '0x39cdc50ee1520c5710502ed193fb8730956ece19',
    '0x4557adba9ed5249a90c6aa5af855788414de2f15',
    '0x4f16c6763d636cccad0ad4897085573359caa9f2',
    '0x52a5eae41306216ca37e01fcb9448e24c7300324',
    '0x56fed5bb34d8ecae854a58502befe1e1fed679c0',
    '0x5767795b4efbf06a40cb36181ac08f47cdb0fcec',
    '0x5d02c857e98465f5b3a957b1f43569c4dae58ca0',
    '0x61e5776b24e2e2db07d2ac729a39ed70f96a9b7c',
    '0x63c87103063a146d75788780f2b026a01c03046b',
    '0x65a77e9608ebad9a50972a8caa088674c3b28dbc',
    '0x6649e107663b3dfd48bf0951cec8be56e28b83db',
    '0x6b96bbd6f1dfc08e3926a2448ed5a1c99b233b7a',
    '0x767b4838b22116e7b05d9de1168a39d7494337c3',
    '0x79dab427458cab98770f3695e1d9dee5e9c43cad',
    '0x7a730e22bff836b3a2bd4cf3160bbb0cb6583c07',
    '0x7ab92ce66c975c9e2dabbb9c682a794eb0a7425b',
    '0x7d374fe73fd8358a93c53e978477f7ba4129be0c',
    '0x7f9bb16bb280d93e6e465420fd02d28b3a8fbc5f',
    '0x80cc618e0c97e6974f668bde9b24414b3b1070b3',
    '0x81744a39f45c8dc876bc8c0af900e90d4a708afc',
    '0x83c06f26e77ee8375c4852304ae5e7d4de07c34d',
    '0x848a9126ff57004aa8bfdc99384f36a4754d4367',
    '0x857d5884fc42cea646bd62cc84f806aeb9a2ae6f',
    '0x89f1056200023bafd97512e6065488071f8cbb72',
    '0x8ea3985f053500d4526ff36ecb5e6e589c4c5342',
    '0x9065431a087d8c0293279118435847159fdb2370',
    '0x97db0e57b1c315a08cc889ed405adb100d7f137d',
    '0x984c5d268b220784e87fbe8edbb5c6b9f7ba9fc4',
    '0x98bc87ff17dd9aac11ea17868fb6b0ea44c4945a',
    '0x9e43d6ba519a2111c6b97f0d56208586264e6a75',
    '0xa9e3c85208250d97fed0b8ed1c659e5bed8442f1',
    '0xaa902d176987901f3c3d75efb50f33520e406647',
    '0xb26fcb9d0bf72f881dcfa9e4eb3b23fb75ae9a15',
    '0xb3bbffb97114d79df7bd45808078a56053e34586',
    '0xb5a7d585f498d8cf832a786a02bbd9d77fa1a86b',
    '0xbc622c6bcc9200c68d525adf5c8b1b9c3d1c6de3',
    '0xbe56959e5a0f0ad22c31d641996978e5517bbb72',
    '0xbfb744bf537a17fdcd66e79c0231e6cfeaa428b9',
    '0xc25b6e9d579d7784941fc6f760da8124cc45f91e',
    '0xd3facd6dc24c137a9871a791f2c844af8a3d278b',
    '0xd59586b52f6f8c90c04c2b9718be7b2ac7d6cc61',
    '0xdab9536fd0452fae1425be23189b92fc2ffe1e2d',
    '0xdb5feb38b950c36eebf018aa43cfec527b57ffe0',
    '0xde8c4e2511a9981b17ba31a2f6430c9cd9d428a0',
    '0xe00981e7c876ece4bd6f3e2e76d20334f77a5763',
    '0xe0c46be3e6d7d8181422c61b4037043207672b5c',
    '0xe106e50af50ba47ff08bd23c3be76fd2bf135df8',
    '0xe106f2b9e8de67def574984a5297ff9a7370e744',
    '0xeb2560b6226b45e9d460c8cfa074a85ef9f8da31',
    '0xeb751c9d44cf3aad37bef22beed736631df8853e',
    '0xfcf8df5fbc253057410059351f5f536ae422c9d4',
    '0xfd63bf84471bc55dd9a83fdfa293ccbd27e1f4c8',
    '0xfe5bab72af1aea76aabc28562e584e59d2708196',
    '0x003dfd836b5aecc95f0e42f1e1f21879c31e8f46',
    '0x00aa53ea23a3abf57d6f81133f510ac6481671af',
    '0x00ebe3f364a55e415419a5b01bdaecaa70f01f31',
    '0x0302f3434dbdee9d3faf680cba8a2bae6b34a83c',
    '0x0340352e52925877618f0333e38028f3fdaed818',
    '0x0492a80d26ed93742f2a0b67600a774c7cc1a22e',
    '0x06a2415cc004a6d1fa02f5557a6c659c33fdd25e',
    '0x06bfb12f55838481b41a3a16987b03901364614e',
    '0x0740655604a8d15dafd78d4dfb335f4e8016b369',
    '0x07914bd4bb1bcdbf8f8520e509deff92a058e8b2',
    '0x079be78927249ac885ecffe75b1a4c2ce8ea3753',
    '0x084fe8a77fb8849c2ef698103a2c92c78587e982',
    '0x092114b69d50c61da17d227cfdab026063bae888',
    '0x0938f080fbaeeceeb50eabcdc4d1469a8fc7fb35',
    '0x0b03f069ceae60aebf80e83890caf2702e37e2f5',
    '0x0b31231686f230b208992a3f5fe3d716a9cd6989',
    '0x0b48318a0954b524fdb33016a878bed60e1ffcb6',
    '0x0c59785411720c19e4d80e942be60ca7527ef664',
    '0x0c5ce143b093426bf200444787e9ee3382fda4f2',
    '0x0ce096a6b5c10f365142b6be31ef47619168ad45',
    '0x0d33b2d9b3ab486bddebc8e32d364f9d6221a0c9',
    '0x0fa69f691cfb175f791695700966fc3e60524998',
    '0x0ff7a59e030c1587b0859a9bc457efb1b177f462',
    '0x1096cb8f6e17db5a072fa5b19dc4b8f212cb36e3',
    '0x11584d6aaebfdbf48cd5a11599bf40b5bc386837',
    '0x11d6a337b76fa11e5e8dd783843746fd1c35caa3',
    '0x1222c2cdee2558addff353fcbaaf7db5a178c869',
    '0x1242bcfd5857228fad0ff90fdf785311c465ce21',
    '0x13030f612da18fe05c24f7d60b0f84e20c12bc18',
    '0x14c87cee8109cef4fce934551f5cc7bd4d94037f',
    '0x14e8f54f35ee42cdf436a19086659b34da6d9d47',
    '0x164767126f2570a427e3c2f34da27003f8394a40',
    '0x1680c3d528f4814bb3997b8ad4a2f361bd7020e7',
    '0x16ccd2a1346978e27fdcbda43569e251c4227341',
    '0x17659e2a7a4d56eee77ef14cc07b8abb1f7c708d',
    '0x17cdc471a1f2fd24713ea96b02bc16d0f0d054c4',
    '0x17eaf2760782f37e56472a09f5fda09485575def',
    '0x185269516c6a37af244b94be962c9b33a3cbd52b',
    '0x18d941d48561f4d7d6914868ce234c7aa0d6ed01',
    '0x19337dbe3fdfd0bf0f503e31d5ec44e75c69bda4',
    '0x19ef04a6b7806197ee7aa39bad9fceaeb9da5f21',
    '0x1a6ab79eca2bbb309f2bc33ebe6d6807707681ec',
    '0x1ae6912e08bb3e105a4f0a60f666376d3c7af380',
    '0x1b510a48a5ccd8f505dbfb37d57c7845e9f741c9',
    '0x1c76368a248de64b6c9930c7553a76550bfca6b0',
    '0x1c8fd32946386d9ad513c1e4a89ec43defac9985',
    '0x1ca251ff696e006ccf78261c89aab9335a543db7',
    '0x1cf5c2489b65607b750fd5a4afa93e7395a1a0e1',
    '0x1e24bbef3d3eb0c6a06d789b1729f8f58b9eeebf',
    '0x1e39319fbb1e9635f29cb60b001f98ce1f9103ae',
    '0x1e9bc687bdbff31e4e0c2f3812d3fcfad9a01260',
    '0x1e9e71c64c98df71ed7180fd2ceb2d5483d7013d',
    '0x1ead6f3d203195e0e5c0c08fd2ee5a81cc08412a',
    '0x1f6212c5b3a0a7b813f7131d7ad5d997da08a687',
    '0x1f7cab552b8bd8aad2804d7863797e3819da0bad',
    '0x20526efa0778f16a2e50bf0cf9eef82ca9c79bd9',
    '0x20634485fce1ee40e5d8a41945f0e35d10e670e3',
    '0x22df7b4019f321d868c32c57a7ffeebfcb05d2cc',
    '0x22f851bcf7353d072ed5cce3caff096195d2794e',
    '0x236c5305a81ac93ff9d0f0f1646d5ddf0ed07764',
    '0x254f2d266b34608085ccec8a8c51119674ad975d',
    '0x2649bb086552825ced34545388dbc40f6c51fea0',
    '0x266f35079410176eefcc5252b7cd9b159b35f0f9',
    '0x2749fc1f09ac1174f1d3c03610b8938c0f7e4bfb',
    '0x27e9531d81e0d89ce04394e233d406256d66d36a',
    '0x284a9e0f4f7869b3294d1931b9845740a8607586',
    '0x289148482620a9c5fa8df8c23c6146955fcab53c',
    '0x28ac01ebf289292783cfaad9bbf2c7fe2666dfbd',
    '0x29c5fbce55fc9a38c6e7b1e4351dba1563a835bf',
    '0x2a0059610c92842dc2ef84af76b244c28687e647',
    '0x2a34a8f3b7a7e2f8a0ac6e013b3664776ee8e0d1',
    '0x2a78ee4c2132d97be24784358447c7293e38b972',
    '0x2a99619a57827a0f1555bf9a42ce8767cf09ad8b',
    '0x2b8d8b12e6eb8ac4915189b05d7bbd44822bca32',
    '0x2c10d02f2879edb2dede3bf895b4532836455618',
    '0x2c48a579668f76dbf59c20b9273da9083be65f52',
    '0x2cd170d34740d2356c464f6bffec1d727a6c96e5',
    '0x2d56f14f7623fa1ab587e06a630e82daa1425631',
    '0x2e25362700cf06eaaf4845c34789f67ea1b78d56',
    '0x2e289bc52eebf12954250371b734f4bafdc187e8',
    '0x2edf166a658af79c5c8bb268265a7def157eb62e',
  ];

  const whitelist1 = [
    '0x2f45724d7e384b38d5c97206e78470544304887f',
    '0x2f995819a80e6f48dcde3e44d71b45669d33db5a',
    '0x300da06aca0fbc160eb724c50b033ef2d36eaa95',
    '0x30910e11b32f668ead77e758956c8a730df836f1',
    '0x30f662d7b32be999da54d82027c171261bc50e9d',
    '0x31369e6d5cc47b0f01722d8e215aa02858812494',
    '0x318a410a22941ecb72391046e8a81482f14bb5da',
    '0x3214e141bdae08be1f382a885cf3d2a448a5e780',
    '0x32692f5cc74e9142e441d8d9eae6079d4cfa2c71',
    '0x330ad0d38e9c12cbc34d7cffefcd99e5530b6bfb',
    '0x33d6946e1be613245360cf8dd8c644f878bea0a0',
    '0x3497bb5f184f75d409f16addfaa23245c4a67675',
    '0x35247c17bf9cd7b8ea80b16ab85f8bbd4f9bd138',
    '0x358c83c3f1bea28c148c3e4a45d9f1411b6730c6',
    '0x375a0530e0f0786edcaa71758717ddef432b55d5',
    '0x37849a2a2f3777fe8528dd30c5ff931ce2ea17a2',
    '0x380f32d80064f2f63d19c68d973afd1c6d4faf03',
    '0x387685f7d392a197b53f8185e801f98eba3e7a20',
    '0x388f50435fa43d346409568f79a1816a554a3cb0',
    '0x3895df43ae8d813c90cdad9bf4ae0d4796f46802',
    '0x394b67c6bc05abb14c73a57706dcd5cb85231c4e',
    '0x3974f9d36d4e6414499c155a30e2dc4259605de7',
    '0x3a549315240dbb0986a13ebd8591a8a0fb9978c1',
    '0x3a55e080d4109f68709d9cae342f2719de6860ce',
    '0x3a6a5fe373d43e4878406f07e51a7611ed4369ec',
    '0x3a7dc1a27ec5ca9437c26f098ad6c08598a88b4e',
    '0x3c6730546829d451fa62dc214693002b4747f162',
    '0x3d9b0a7ef1cceada457001a6d51f28ff61e39904',
    '0x3ead2c9855accd3ab8e93ffe64d894967d42887a',
    '0x3ee34b476fa0f6151165cc92179c9cca14d020df',
    '0x3f754e62cd7eac8e10f584e965d1addc1e3ca0e0',
    '0x403129a28ea59eb94bed3a772eec0f72d9029f45',
    '0x4111e6a898c59dc28dd8b57ab9fbce51f64cf8dd',
    '0x413eb62ef96755bf1189ed2528cb47400c5b5205',
    '0x41a01026c266c959970f52f01404ceda647d5d17',
    '0x431dec52a66166a70916894aeb8066c09bc70aa1',
    '0x43a692b152055bc2092ae7f466acd427999a466d',
    '0x44aea8b8bc5dec85e838008c9ada39d46e239c2e',
    '0x44cc5fccfa0be0062ac07bd1adadd1bf7621855a',
    '0x45b426fc8db36a0d3e522f9a6d27cd060d0d8b08',
    '0x45e5d35f5f80eeb115cafc81b01978ab2eaef6b2',
    '0x460f7618789f065eca2cdf7978ba1027e406d0b6',
    '0x462d5eda34484d56d92eb0844c257af34ba1937a',
    '0x47977ae1e318dd7696c36bfb951639fcb7f9c5f4',
    '0x48b6952d0c9d51af093aed65c0ab09a59a87e5ed',
    '0x4998976bdd0e873b586843b9eeb5d58a4e3b78a4',
    '0x49dffad9138a1e09dcd428af30e4988b5127ee60',
    '0x49f8622f0774efd52da18cbdfefd145b1f1ab98f',
    '0x4a02e1b7de486cd1edb23a0719c5b3999a4b350b',
    '0x4a6305da976f04b05d1b400b14bd3392d4b6bffd',
    '0x4ab70e74fee1f0024b05d38ef448a5f25f40a90b',
    '0x4b373b95bcc4028b04171b7687ee89d37164c77c',
    '0x4b4102f462b88c3a7fa6846b6466cc7d4f31d44e',
    '0x4ce69fd760ad0c07490178f9a47863dc0358cccd',
    '0x4cf64993ff628351a97ca96ed3e400574103610c',
    '0x4e1c696c99810a7301690799e7d8e60982de3362',
    '0x4e93fa03afbae1d171189be4878a101113499a7f',
    '0x4f050c350731babb058908c3deed34fee6b50da6',
    '0x5050492496854c61f1f40874027b93b0ace9f3d6',
    '0x50b6d08d61ac4a3e7710411ef769046270c5dd16',
    '0x50c1ee68ccb824704f2a2b12e3488aeff76ae27e',
    '0x5223c1c21c1894ee58ded4d09ccfa239a272af16',
    '0x52c750edb7384bd2ce0af22b206abbe53e32f7b3',
    '0x5368e0e3761d6123545c21c2073661a153c060a2',
    '0x5369c259374ad8eada88804f4e80196ddce829e5',
    '0x5433365fd91b863cd3747bfe5e232d4f3e3cc76b',
    '0x54bbeea46ac71801e348bb426b41bc05a69b1159',
    '0x560ee74e7aa58d42dd4f917becb07881b6879b05',
    '0x5649cd1ca8bd765315357e3106970f5b7a5da49d',
    '0x5685a0d411e88fdf99702189506540807c0fd4f0',
    '0x571aa461e721f4e85dd99800e4c10c0ca9405723',
    '0x5745582acd6928a3eec0351744a3d54965bf66e3',
    '0x57fb3c25b0560c29bff65cfa25c9e36c2b3c531b',
    '0x588d988d2c01b5ac3e00044f5ca4afd97e6ca9c3',
    '0x58b311908ef0cfc304b603e94bb0d10afca3a93f',
    '0x592a68ba8e5022837424b5500c674fcc2e10cb59',
    '0x594fa8cf6dbe7c59b56fca5bd499124bb347f87d',
    '0x599fee6f253be4a8e5db1921c4ead2dfb9eff3c1',
    '0x5aa0f3d2f5b1b93e0e1e4ea1682d89fd1eba0feb',
    '0x5bb5a8fe0cddc84c2184493308a59cbb9cdd2325',
    '0x5bb5ecf3616879fbc12d7d75be5c589d3f7557c0',
    '0x5bb681747da427dea95d20347a4eb76601279f66',
    '0x5cc65e0f2ed2997d4ff074942e4f56c20a519a1d',
    '0x5ce90c58e06921d1609f72b2d2283225e0e66508',
    '0x5d081bc01dc096e7dcbdbc7515e43fd1cb8b29ec',
    '0x5d125481f1f346b86f6a59429422713fa48bf502',
    '0x5d599e440dcd436223aa8c18b0a512f7c84f5e4c',
    '0x5d6a46d58453b4fc6891a719727dd98900dbcaaf',
    '0x5d7a4281652dabff74ed1d05b664026531c803a9',
    '0x5d92fcabf327456bba33d64da8721c56a69b08d0',
    '0x5dbf5b3bdf277d8e1e5aaa9343e4410f4c1bbb1b',
    '0x5fa4e0232a815f0715b0abc56bdb575039c18037',
    '0x61552e91c3605ba75b716b48b7cc76a28c9e4914',
    '0x625d04023cd0e7941d493beaa68c9bbb8f2754d1',
    '0x62c312ec1441e2e8ef846c0fd2227fa315b93b14',
    '0x633d4a9d76c226f31a8315fe6a5d9dc7f246d719',
    '0x63a5e31cd1a3d36f3307e1b0f5df7afd30228de5',
    '0x64386fb62385c2bc6fd65fd5fc2955b5895a2145',
    '0x645e685a0053b627de0b7f0f269e3e228e67ed59',
    '0x64d0818acd03fd2c7b41084a134068efa9e9eabe',
    '0x64d3413cf86b63121040f913fcf3e1810acb87e7',
    '0x65504838463b09bbdc8be4561a05ee611f6077d8',
    '0x656a41eebec46a6f3709783c8c93c2e522d2afeb',
    '0x658c4dc01df722819a6959acde4137bc85fa500e',
    '0x6622fd16e7467b6681e61258ec71183c7d6349b6',
    '0x67427e8be88a4f06049be17f91f8d1015fa989e2',
    '0x67bf14b2fc8c66eb3c6b919d68e6fb83556538f0',
    '0x69cd1c2e13113c09a22ff98cbd2db3f682f716b4',
    '0x69d114f925409b233fa2e54bed6413c630ccd80a',
    '0x6a018ad51de844243ce7fb743c3e5f4481df6858',
    '0x6a9fcbb0fd4e4e9158577ac42390b5b4417b8d16',
    '0x6b2b74e41417914ccbbffb590e11bcba6b266d57',
    '0x6cde214de4a7d84df4542e1ae0b7d4b2251b910e',
    '0x6e2e32f04248dd11f9c8b07a114ab66419f1e764',
    '0x6f7c010f96bb5adf55f51e3de4ecdfc811316ae1',
    '0x70004330cbbc8c1179facc6f9f8daacb5a0ef9d8',
    '0x7087b5a5d8bc3664c1ba6e853336ef9e432a4b09',
    '0x7182423cdc067cd9e00aa65a29f9cf7ca01284b3',
    '0x72c0c251caac4d52e38d5d7223022bce69d4a719',
    '0x7308373d971eb4f328905893fee68bdc6227a020',
    '0x733ab147ef8f4efea84ced248f1afe74fbe21582',
    '0x73624873cd686a4217c265554c57c817a1265368',
    '0x73a2a47cd16943e3d156d89cbdf6021062ed2f99',
    '0x73a74b1e90c8301813379d7b77a2cfbd90d8b277',
    '0x74ddc78d670c97ca0f2d2b8a18dae8b91aeea541',
    '0x7506316a24fc4891e0b403f04aed88905b777165',
    '0x75bc9d1ad9ef20958aff58e6af716cba282fe88a',
    '0x762039f76394c51aa421b17832d3b9b6a39c9d3f',
    '0x771b15b287a4bded50ab06370f6a833950dd3912',
    '0x7773d869a30d750aee2956dab8fa208529568a50',
    '0x77a6b981f8be856e1670be732df657350d8ff0e3',
    '0x782d58bf9e2bc43e88e0d8a9260a8f3d583907ac',
    '0x794d8592d2e4dc66cd72165e3d04fde426af68f1',
    '0x79bda65a025d66348ba879a126660c81b2efded2',
    '0x7aff7230c028031379f4b847180ebbd9c7884acd',
    '0x7dbd0493d10251a382e339bf127286f4ce644e3a',
    '0x7e04033e1807c7507d804565cabcdedb5cf6a831',
    '0x7f59f02d43cd2460bb8ca8d8537d76d94a95ccbc',
    '0x7f5baabd5f481b02aeff150b153b36ef0b0328c9',
    '0x81621c76538282ad6b86ddf40a493f7ecd47ed85',
    '0x8241ec68618c785cfe419159c1aa05d16a5fc5ec',
    '0x828687f818b912a9276641a97e334b844092123a',
    '0x83b37ddd795667bce5512a1822b8b11ad1fe07ad',
    '0x83f3f0522428c426c9864a15ad5bf4ee4f6637d9',
    '0x840745933bb29d67ebd6c756692b84a70efdfd76',
    '0x841ad9e345eca821594c85fb9aeb4b1233cd54dc',
    '0x8507c2eb02355a2a480698274eee14d8b3813d89',
    '0x8553e24b9eb99c21ea96a3e167cf4b8c75fb345c',
    '0x855426c17bdbd23888b7b358f96c0bd08c522e00',
    '0x8568e1a8082b442ae9be089a3b3888a25ae55f8c',
    '0x86d8dc427b4403fc533ec40ca507d5c14100af24',
    '0x87d643432224535a87a6c240caee6a6405748adb',
    '0x88340aea8c5b5c9e1dad0685aeeaedf366b7e627',
    '0x88889388076d86200f112fa1de9b7c3786c91b3e',
    '0x8a742c860cd93efcf8e4911777e59f6a03d7e534',
    '0x8afcee41a79541fb220682dbb406f474ec1f22a7',
    '0x8b39440f2740e1cb832509790a40a1395b5e386a',
    '0x8bdbed08c8ad936f37916c04f84c8ca4bf48850f',
    '0x8c3e41afab62df84453442af2a9cb47317c47e42',
    '0x8e5e01dca1706f9df683c53a6fc9d4bb8d237153',
    '0x8f08ee5e3e44bdc28127e050fcb13f5e4671433d',
    '0x8f96d626f5d0622857145fb741168b0e3fa15643',
    '0x90e3d7f20731d7ddce2be144ff9b71c5a8af91f5',
    '0x915a8087564a09fa4a455ed94cf6ee31249a400b',
    '0x9231839f4112672494d561540c66f6ffd850b1ab',
    '0x9290be33360e294f6dfb2a213f344034e7b79f9b',
    '0x95121b5cf1c451331734593b2d3ded7254667605',
    '0x9524f1a0da84d0626a34dc5d7d7260434ee7191e',
    '0x959ebe8861481e0bc21b37444bef96167bad5834',
    '0x9665b6f0cf162792851a902e452248b16f2f4b5a',
    '0x96e882f87ed0e8bba6f057ff7720c8a7cd6d4d0f',
    '0x970f194375baff13840b31daadd67adddfbc1da1',
    '0x9788f189c458aee662d35063c38dd847b1b1cbd9',
    '0x997338dac7cadb07878c8483c512e901166fe4df',
    '0x9a1dae32e0e0356d6e55c7914f0887d197fa7058',
    '0x9b5c2594f55726fcf83268aa2beb9b9bc9f585b4',
    '0x9c35e22f5ed9d06ab6dee1365389874210463a26',
    '0x9c6fb33fdbce49c9f95bc7fb7722dcec9cb5ace1',
    '0x9c727263e7685e7ab0954db52b37358ede4be92f',
    '0x9d823dab3fa620c4945a0ee7dc3ae165bc2e107e',
    '0x9e30bdbdc4df47cb542222beae91270c06d4bcef',
    '0x9eaeb4d81c4c343b8681331f3613a770794abd10',
    '0x9f814a00565ae9cb2257e378f7cf89a586b8e3f8',
    '0x9fc8024682eead9139087778c8d5ab856462df7e',
    '0xa05fea249195f1218f70bb369a00e13ee706989c',
    '0xa0bc0dfd012d80d9daa0da0694b2511b475a2ea1',
    '0xa3386664881e0f9d5839dab0ae5795939827b37c',
    '0xa3de7cc7fde1b043fc749eb577e14bed03811d4b',
    '0xa3fb575f612e8c107b94928a87d7c22fbf3eaacd',
    '0xa446ff71235ac7ea5fc11cf9dab681230bfaa3a2',
    '0xa4f79238d3c5b146054c8221a85dc442ad87b45d',
    '0xa4f7a42f2569f97de8218aa875f58533fe842fee',
    '0xa5b8d4bfbf295edddde15340b2867bd210a2d885',
    '0xa6ffd9f71fedad75d846735e6b96a579d98b8877',
    '0xa7132f36d56f88c42708f869e1980c4ff4bae892',
    '0xa7a7e108a88e137ff754306a9501e65c980a65e6',
    '0xa8dedf5a1e2bd66638d00f08fc002bfa120f9abe',
    '0xa8e95d233730c2fc4c526b961a5f87124d5f77a9',
    '0xa99e39e5edfc50555afff61720c13268572e10df',
    '0xac494d6774fea6bb2e85367953d196d759502c1a',
    '0xac9f904fb8ca38309ba7cc2332a9ea81acb6ad06',
    '0xad915b57fa83355ba26a07774f881f83894bf7c4',
    '0xadacd79719dec7ddeb3e85d30414785a699642f2',
    '0xadbb4313af4271d59cd10bf809432086dc8cb8d3',
    '0xadf67e88155fc905e1e6f3facf989b77cfb2df3e',
    '0xae73c3e7130553d25fba71c25e7894dc37dfe5c5',
    '0xafb20573ca4665b86e652e9eb93fda22f448ffa9',
    '0xb039a2c87b3cc60839722806646d7a6ab21f8406',
    '0xb0b6e08f4a92ae03a87eb657fa2353b39c355a54',
    '0xb1bc409c15c19b70dc9df761a7398386e01fc514',
    '0xb22d6eaff29d135d6e3ffc3eb389729df7d2cf11',
    '0xb2754b61d93c0c0f00b0be4fa7d2012b6cd2b430',
    '0xb307d426a34a72a94b32bca5c5f0c8b36440fa80',
    '0xb618d796bd7ed78387c7de0e08bb9868e98fcdcb',
    '0xb62b8503dc3c1ce953eb40958b152749fecb5834',
    '0xb646c5599d7d0399d1b83ce1b0e809b646f46d41',
    '0xb71407e1f5b39797f1d9b245c065f406aaa1d379',
    '0xb7a61f6e471df61ba906fdc2028f788463148101',
    '0xb8cbafb548eda8d24974c9e05af0ff43a87a208c',
    '0xb92246136f049607423b4c986302d407aef91a17',
    '0xb927dded7b6a779e4e4666ac56854fbd6f63d0cc',
    '0xb9b9eadbdab25754a36dc176c34e6519e9b7ff3f',
    '0xb9f6d1ed0eea35267a10f5baf6412575c65ef74d',
    '0xbac0238d3239ca125cac882b8c91587192f3de63',
    '0xbb5cad97dc15e8c3fbe457fa65cfb38b2dfd1002',
    '0xbb8ade1a31a79422b425e876184724c209f78289',
    '0xbbd50aae1a83cf3fb8e74f18afcc8bb8346a0a8d',
    '0xbc469d56abff766bbe3789e3c3f5df97acae3494',
    '0xbc4eabffedbf77393205e983aee70c0f7de9c1b0',
    '0xbdc6047187966c697c3f6c078c1376d347e1f98d',
    '0xbdde4b9d172751b343841dfa66031d843f561156',
    '0xbeaa16abd3a04b05f7e171eea89114efbda62f6e',
    '0xbf401b81e2d01bfb80d32a7b71fc0715d6d76d45',
    '0xbfa6190743b1179e674508585de4552af3d87d02',
    '0xbfe334b816404e21577cef84b1d3cf7035637512',
    '0xc0857cc891a34ac5c96b6a1565939a89363ccdcd',
    '0xc0d35857e87f5ade6055714706fb4dfd96de087e',
    '0xc16944246f9683df71b746dde2b5386fbc57dd02',
    '0xc5c47dbc152150f83dfdab5fe0b7ba3fae582e0b',
    '0xc713e05905a1da369648b6bbc0224e6bbf67a126',
    '0xc723e062b0c06d258958e532ee363e0c3d81961f',
    '0xc78e8ea590c6c75c346fe8c7b1ef302cffb9af0a',
    '0xc7ed7bf2a126983dfde425126b03693d40477ba7',
    '0xc800f8eea7430b0d888b980c6779fb9f59235f28',
    '0xc87edfeefb5af5c802478d81c998f89e8aefa536',
    '0xc98dc99986ece24bcfe53e7ffb3f1dcb8b5a67aa',
    '0xca4a31c7ebcb126c60fab495a4d7b545422f3aaf',
    '0xcb7d9cb4c1144db98f3390273bfbc1c0ff69d335',
    '0xcbad932f400a996ccdab399f5d360f1eb24651fb',
    '0xcd79272e57a870c0b1f69a8c840244364c4a0260',
    '0xcd9d8e8d7e8cb94fa9ec41bcb81d70234e592312',
    '0xcef02fcc4e8bce2aa17b9a694b09d8c8cc899db7',
    '0xcf1480169090995192af5d2fc261826a72318d9f',
    '0xcf5bc4e64ee13f4fae8700c4c54207a40cd73ebb',
    '0xcf81d7c5c23388478bd2c76603bf5857b7fc4d97',
    '0xcfd530c719141f99eda125d1b9a9c93f6440ac0f',
    '0xd01910ba2ff5898c95d94eafeb478261dfc43807',
    '0xd06a56e1ca79fd6cab8b7491b5f096c1beb7e6aa',
    '0xd11bcc0e7d44169a572da39ca6297d0dfa5c17fa',
    '0xd6980b8f28d0b6fa89b7476841e341c57508a3f6',
    '0xd6ab3210442765d0bd806db6643da28d307eb422',
    '0xd6f10f749a3223d92b793414daa0fdf98519c09e',
    '0xd78896b4aea9ef9dd47b3fcf5be39a2429f97f53',
    '0xd89cdcba2a2f85fb3b185253ca29c6127eb7cef5',
    '0xd8aa3e50203d15666b80c7a577f2e90f7207eb21',
    '0xd8b0e478047360dfbcfd1f64428f7fa5b96ac846',
    '0xd9112665418ac2609a721577fbe91f1f12eff887',
    '0xd91c8fe4ce51e400cee8a4ad49b774e7f2668200',
    '0xda11d239780f0b6e8007951f8e9ccdd79ce32fb9',
    '0xdc02016e18b213265b5e848ced1a3e1670af962d',
    '0xdcf37d8aa17142f053aaa7dc56025ab00d897a19',
    '0xdd59b0f8e8e4adc42c1003fbe2a71e28905e9802',
    '0xdd7ef831069c4603f5369118b9e4b6c3ebc86a02',
    '0xde3145dab66536576951152aede559055a117095',
    '0xe0b7d48fd0e55cf53b76156809f4707165724b0d',
    '0xe1b29b42ddb9baf123e1ce7aebf95a0e248da097',
    '0xe48adab39695e79511c91945f0fed9b5d69242a0',
    '0xe499e09e26a3b52f2fc307c95ab37d97d9cb104d',
    '0xe4b1cd6a0c8ddb208e169692d122facdcc43f300',
    '0xe4fde5b2905e1973e9253645748dc77e64cb8149',
    '0xe52470bef1da70af094a91e326076c0bdca688ff',
    '0xe53439db3e9a240c5a8b5abb874bbbed5934c47c',
    '0xe66bb5ef7359906b46d2a99b10fbefb643526fa3',
    '0xe8a30a34ba93de71fcf77e2c4bb228e982976f42',
    '0xe950842347e4cb1a9d257abd9fb8cd64d360eefc',
    '0xe9db81a85fdc1f28239bdca8d3054ad39f44a8d5',
    '0xea84e1b96bbc06af9da27572f65f3a5740f32998',
    '0xebd7ec3a71fc47b715b06d76436953d092e898f1',
    '0xebd8d14a611572a17fbba75032f52b64e7ce04f3',
    '0xebec640c42a2d36ba3e3b0c38e2e1c45e293292a',
    '0xed06b7c112f3ff075a03142eec8b06350d69c8b3',
    '0xed8e924735f590572361b52657abd9a3260f35a0',
    '0xedb1e5543b32910d607a1e89f2ab5b9c7f09c0b8',
    '0xee13ae5caf40f5757ed890be6330788779984bfa',
    '0xeefb757b6742d7a1eb7cd32b8a460bdd3012de3b',
    '0xefb4b2597b3df18ef8b8d8ad56d99ea83a7f6fd3',
    '0xf0597f599c0df3e9a0fefb6d103b3eecbd72827d',
    '0xf0b080f40b276f5fcfa28763fabcaf20c68ceeef',
    '0xf1527cb2d748f38a324f273bf499ce25ff400304',
    '0xf167831f7a9018038a7702bb0d5875f09a552b2d',
    '0xf241e1c926236d8100a696ebe1b4793f06ead712',
    '0xf3a47521e471d5ad1ab8efcbc287751abc565c31',
    '0xf551e5cd01c8f3a70350f59fbba2ddb885b4be07',
    '0xf610b221f20c44653987165cfea3018442647a41',
    '0xf617c8f8a91e11283e17f0e33fe58e9ec8c85848',
    '0xf6195c8f154e92ae4e5693be6bba87734d076fef',
    '0xf626e9a2fddbf55b0b1a87c56128a7ba6723a85a',
    '0xf73b80b959dc6e3ee284d40e884a9e7fc4af7685',
    '0xf79fa8b8f6130192cdb33df0950f664746988325',
    '0xf8786d88b13280bb1b7420078049b74e5cc5e546',
    '0xf9b26398731b85665c9dcafbe860097adaf1239c',
    '0xfa5089187de2238b26203572905152f563f0a25f',
    '0xfadd33b6500b3920e740d1d06388b63d58a193e0',
    '0xfb9094dafaf13d9ba709e81e1eaae881ce3f49a1',
    '0xfbaa46fd1cc1c11bcdcf367458a35e1398170faf',
    '0xfbd0e71a4ff49ebb789bf14b55d1a1c2c06a74af',
    '0xfbe1ab3706e98322b1b0585c78a602c16a6b3d65',
    '0xfc1e21f82f2232370bd918c1169a11c48e4fcee2',
    '0xfc2ea617f5214fdb17caa576837cd044b93959b9',
    '0xfc8084cf7e0f916f114f9bdd8a86ba2427efe976',
    '0xfc963a93457c5644e51d955f3b2d3012e27ab3dd',
    '0xfcef6d899a2813778568fd61ca9e50bcec6796b5',
    '0xfcf81069eabdf98ce02c9fc3510e5c64135772ef',
    '0xfd25508e72c88c096c1195b54397a4f948c36451',
    '0xfe46cbc9bec5aa8633b31f212801a024c0133ca6',
    '0xfe4f961cfed01bce981c6f8c1ebf52646fc84855',
    '0xffb05368a109f275442f699d8fcbb8a289fed83f',
  ];

  const testArray = [
    '0x962A2880Eb188AB4C2Cfe9874247fCC60a243d13'
  ];

  const acceptedCurrencies = [
    "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83"  //WFTM
  ];

  const prices = [
    ethers.utils.parseUnits('50', 'ether')
  ];

  const PopContract = await hre.ethers.getContractFactory("PopSkullys");
  const connected = await PopContract.attach("0x1b60B6daA371F5066bd8C1DC032627bf1f4E95df");
  //const ERC20Contract = await hre.ethers.getContractFactory("ERC20");
  //const erc20Connected = await ERC20Contract.attach("0xFb24bC6E1cE0e9f6ceb633FeF2127c2826d8820E");
  //await erc20Connected.approve("0x6C6BAFDf153Db9eC245f957Bc58794f03D65ac80", ethers.utils.parseUnits('1', 'ether'));*/
  /*const connected = await PopContract.deploy(
    "PopSkullys",
    "POPS",
    "https://gateway.pinata.cloud/ipfs/QmbE3Nq8JM1RbXgWK7n6JzCsMEStZVBGyc78zsQtStpjQZ/",
    "0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c",
    "0x767b4838b22116E7b05d9DE1168A39d7494337C3",
    5,
    3333,
    5,
    {gasLimit: 8000000, gasPrice: ethers.utils.parseUnits('250', 'gwei')}
  );
  await connected.deployed();
  console.log("Deployed to: ", connected.address);*/
  //console.log(ethers.utils.parseUnits('0.00001', 'ether'));
  try {
    await connected.setWhitelist(testArray, {gasLimit: 8000000});
    console.log("WhitelistSet");

    /*await connected.setWhitelist(whitelist1, {gasLimit: 8000000});
    console.log("WhitelistSet");

    await connected.addCurrency(acceptedCurrencies, prices);
    console.log("Added Currencies");
  
    const status = await connected.pausePublic(false);
    console.log("Unpaused Mint");
    await connected.withdraw("0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83");
    console.log("withdrawn");*/
  } catch(error) {
    console.log(error);
  }
  //WFTM
  /*try {
    const tx1 = await connected.mint("0x0000000000000000000000000000000000000000", 1, {gasLimit: 1000000, value: ethers.utils.parseUnits('1', 'ether')});
  } catch(error) {
    console.log(error);
  }*/
  /*try {
    for(i = 0; i < 38; i++) {
      await connected.mint("0xFb24bC6E1cE0e9f6ceb633FeF2127c2826d8820E", 1, {gasLimit: 1000000/*, value: ethers.utils.parseUnits('1', 'ether')*//*});
    }
  } catch(error) {
    console.log(error);
  }*/
    //console.log(tx2);
  
  //await connected.transferOwnership("0x7D13CD3dCC930BE7fBF1358FaC2617105869DbEc");*/
 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});

  /*

  // We require the Hardhat Runtime Environment explicitly here. This is optional
  // but useful for running the script in a standalone fashion through `node <script>`.
  //
  // When running the script with `npx hardhat run <script>` you'll find the Hardhat
  // Runtime Environment's members available in the global scope.
  const { BigNumber } = require("@ethersproject/bignumber");
  const hre = require("hardhat");

  async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy
    let wei = ethers.utils.parseEther("1000")
    let weiString = wei.toString()
    console.log(weiString)
    const SlurpToken = await hre.ethers.getContractFactory("FKSLURPDEV");
    const slurp = await SlurpToken.deploy("FKSLURPDEV", "SLURP", wei, "0xF1a26c9f2978aB1CA4659d3FbD115845371ED0F5");

    await slurp.deployed();

    console.log("Contract deployed to:", slurp.address);
  }

  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

  */