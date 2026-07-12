/**
 * 濮尚服饰 - 静态数据
 * 从数据库 init.sql 提取的静态数据
 */

window.STATIC_DATA = {
  // 公司信息
  companyInfo: {
    id: 1,
    companyName: '濮尚服饰有限公司',
    shortName: '濮尚',
    slogan: '匠心编织 · 羊绒之选',
    description: '濮尚服饰有限公司是一家专注于高品质羊绒及羊毛针织服饰的设计、生产与销售企业。公司秉承匠心精神，从原材料甄选到成衣出品，每一道工序均严格把控，致力于为消费者提供兼具舒适与优雅的高端针织服饰。我们拥有现代化的生产车间、先进的全成型编织设备以及经验丰富的工艺团队，产品涵盖羊绒圆领毛衣、高领毛衣、麻花编织套头衫、V领精纺毛衣等多个系列，远销海内外市场。',
    address: '中国 · 上海市闵行区针织产业园濮尚大厦',
    phone: '19817578079',
    email: 'contact@pushang-fashion.com',
    foundedYear: 2008,
    logo: null,
    heroImage: '/photo/01-hero-fashion.jpg',
    copyright: '© 2026 濮尚服饰有限公司 版权所有 沪ICP备2026000000号'
  },

  // 产品分类
  categories: [
    { id: 1, name: '羊绒系列', description: '甄选内蒙古优质山羊绒，柔软轻盈，亲肤温暖', sortOrder: 1 },
    { id: 2, name: '美利奴羊毛系列', description: '采用澳洲美利奴细羊毛，弹性佳、透气性好', sortOrder: 2 },
    { id: 3, name: '混纺系列', description: '丝绸羊绒混纺、毛圈针织等创新面料系列', sortOrder: 3 }
  ],

  // 产品列表（含分类名称）
  products: [
    { id: 1, categoryId: 1, categoryName: '羊绒系列', name: '羊绒圆领毛衣', subtitle: '柔象牙色 · 经典圆领', material: '100% 山羊绒', description: '甄选内蒙古优质山羊绒，15.5微米细度纤维，经过精细梳毛、纺纱、编织工序。圆领经典版型，贴身穿着柔软温暖，适合日常商务与休闲场景。', image: '/photo/56-cashmere-crewneck.jpg', price: 1280.00, sortOrder: 1, isFeatured: 1 },
    { id: 2, categoryId: 1, categoryName: '羊绒系列', name: '罗纹高领毛衣', subtitle: '驼色 · 优雅高领', material: '100% 山羊绒', description: '高领罗纹设计，修饰颈部线条。驼色调温暖优雅，羊绒纤维天然蓬松，保暖性卓越。极简衣架展示，时装感十足。', image: '/photo/57-ribbed-turtleneck.jpg', price: 1480.00, sortOrder: 2, isFeatured: 1 },
    { id: 3, categoryId: 1, categoryName: '羊绒系列', name: '麻花编织套头衫', subtitle: '奶油色 · 经典麻花', material: '100% 山羊绒', description: '经典麻花编织花样，三维立体辫子绳索结构，奶油色羊绒纱线。平铺展示复杂编织工艺，兼具复古与时尚气质。', image: '/photo/58-cable-knit-pullover.jpg', price: 1580.00, sortOrder: 3, isFeatured: 1 },
    { id: 4, categoryId: 1, categoryName: '羊绒系列', name: '圆领叠穿毛衣', subtitle: '奶油色 · 叠穿经典', material: '100% 山羊绒', description: '奶油色圆领毛衣搭配白衬衫领口叠穿，经典男装搭配方案。整齐折叠展示，商务休闲两相宜。', image: '/photo/63-crewneck-layered.jpg', price: 1180.00, sortOrder: 4, isFeatured: 0 },
    { id: 5, categoryId: 1, categoryName: '羊绒系列', name: '羊绒V领背心', subtitle: '驼色 · 轻盈背心', material: '100% 山羊绒', description: '羊绒V领背心，驼色调，置于极简展架上展示。轻盈保暖，叠穿搭配利器，春秋季节首选单品。', image: '/photo/65-cashmere-vest.jpg', price: 880.00, sortOrder: 5, isFeatured: 0 },
    { id: 6, categoryId: 1, categoryName: '羊绒系列', name: '超细针距套头衫', subtitle: '浅蓝色 · 丝滑触感', material: '100% 山羊绒', description: '超细针距编织，表面光滑如丝，浅蓝色调清新优雅。精确折叠展示，适合追求极致细腻触感的人士。', image: '/photo/68-fine-gauge-pullover.jpg', price: 1680.00, sortOrder: 6, isFeatured: 1 },
    { id: 7, categoryId: 1, categoryName: '羊绒系列', name: '毛圈针织毛衣', subtitle: '柔白色 · 艺术纹理', material: '羊绒混纺', description: '毛圈针织工艺，独特环状表面纹理，柔白色调。艺术产品摄影带柔和阴影，兼具质感与设计感。', image: '/photo/69-boucle-knit.jpg', price: 1380.00, sortOrder: 7, isFeatured: 0 },
    { id: 8, categoryId: 2, categoryName: '美利奴羊毛系列', name: 'V领精纺毛衣', subtitle: '海军蓝 · 精致V领', material: '100% 美利奴羊毛', description: '精致V领精纺毛衣，海军蓝调。美利奴羊毛精纺纱线，手感顺滑、弹性佳。精确折叠展示，奢侈男装摄影风格。', image: '/photo/60-v-neck-fine-knit.jpg', price: 680.00, sortOrder: 1, isFeatured: 1 },
    { id: 9, categoryId: 2, categoryName: '美利奴羊毛系列', name: '半拉链美利奴毛衣', subtitle: '炭灰色 · 半拉链设计', material: '100% 美利奴羊毛', description: '半拉链设计，可根据温度自由调节。炭灰色调百搭实用，美利奴羊毛天然透气排湿，适合户外与日常穿着。', image: '/photo/62-half-zip-sweater.jpg', price: 780.00, sortOrder: 2, isFeatured: 1 },
    { id: 10, categoryId: 2, categoryName: '美利奴羊毛系列', name: '美利奴四分之一拉链', subtitle: '麻灰色 · 运动休闲', material: '100% 美利奴羊毛', description: '美利奴四分之一拉链套头衫，麻灰色调。简洁台面展示，现代男装产品风格，兼顾运动与休闲。', image: '/photo/70-merino-quarter-zip.jpg', price: 720.00, sortOrder: 3, isFeatured: 0 },
    { id: 11, categoryId: 2, categoryName: '美利奴羊毛系列', name: '华夫格针织毛衣', subtitle: '浅灰色 · 纹理感强', material: '100% 美利奴羊毛', description: '华夫格针织工艺，方形网格图案立体表面，浅灰色调柔和。展示独特纹理质感，日常百搭单品。', image: '/photo/66-waffle-knit.jpg', price: 580.00, sortOrder: 4, isFeatured: 0 },
    { id: 12, categoryId: 3, categoryName: '混纺系列', name: '几何花纹毛衣', subtitle: '同色系灰色 · 几何图案', material: '羊毛混纺', description: '带几何针织花样的毛衣，同色系灰色调。平铺展示图案细节，现代感设计，适合追求个性的时尚人士。', image: '/photo/64-patterned-knit.jpg', price: 680.00, sortOrder: 1, isFeatured: 0 },
    { id: 13, categoryId: 3, categoryName: '混纺系列', name: '丝绸羊绒混纺系列', subtitle: '象牙色与香槟色 · 丝绒混纺', material: '50% 丝绸 50% 羊绒', description: '丝绸羊绒混纺纱线，兼具丝绸的光泽顺滑与羊绒的柔软温暖。象牙色和香槟色经典搭配，高端面料选择。', image: '/photo/04-silk-cashmere-blend.jpg', price: 1880.00, sortOrder: 2, isFeatured: 1 }
  ],

  // 生产阶段
  stages: [
    { id: 1, name: '原料甄选', description: '从源头把控品质，甄选全球优质天然纤维原料', sortOrder: 1 },
    { id: 2, name: '设计研发', description: '原创设计，匠心打版，将创意转化为精密工艺', sortOrder: 2 },
    { id: 3, name: '编织生产', description: '全成型电脑编织，精密针法，匠心制造', sortOrder: 3 },
    { id: 4, name: '染色整理', description: '天然环保染料，多道后整理工序，赋予面料完美手感', sortOrder: 4 },
    { id: 5, name: '质量检测', description: '严格质检标准，确保每一件成衣品质如一', sortOrder: 5 },
    { id: 6, name: '包装物流', description: '系统化仓储管理，高端包装，安全送达', sortOrder: 6 }
  ],

  // 生产工艺
  processes: [
    // 原料甄选
    { id: 1, stageId: 1, title: '天然羊绒纤维', description: '甄选内蒙古天然象牙白色未加工羊绒纤维，蓬松柔软，15.5微米细度，确保原料品质。', image: '/photo/01-raw-cashmere-fibers.jpg', sortOrder: 1 },
    { id: 2, stageId: 1, title: '原毛纱线束', description: '天然奶油色和米色原毛纱线束，排列在质朴木桌上，展示毛衣生产源头材料。', image: '/photo/02-raw-wool-skeins.jpg', sortOrder: 2 },
    { id: 3, stageId: 1, title: '美利奴羊毛条', description: '优质美利奴羊毛条，柔和灰色调，蓬松纤维质感，用于产品工艺介绍。', image: '/photo/03-merino-wool-bundle.jpg', sortOrder: 3 },
    { id: 4, stageId: 1, title: '丝绸羊绒混纺', description: '丝绸羊绒混纺纱线球，象牙色和香槟色，置于大理石台面，展示高端面料选择。', image: '/photo/04-silk-cashmere-blend.jpg', sortOrder: 4 },
    { id: 5, stageId: 1, title: '纱线色板', description: '奶油、驼色、炭灰、海军蓝、象牙白等中性色调纱线样品，展示品牌色彩体系。', image: '/photo/05-yarn-color-palette.jpg', sortOrder: 5 },
    { id: 6, stageId: 1, title: '天然植物染料', description: '天然植物染料颜料盛于陶瓷碗中，大地色调，展示环保染色工艺。', image: '/photo/06-natural-dye-pigments.jpg', sortOrder: 6 },
    { id: 7, stageId: 1, title: '羊毛纤维微距', description: '单根羊毛纤维天然卷曲和纹理的超微距拍摄，展示材料品质。', image: '/photo/07-wool-fiber-macro.jpg', sortOrder: 7 },
    { id: 8, stageId: 1, title: '纱线筒展示', description: '中性色调纱线筒按颜色渐变排列在木架上，从奶油色到炭灰色，展示丰富纱线库存。', image: '/photo/08-yarn-spool-collection.jpg', sortOrder: 8 },
    { id: 9, stageId: 1, title: '羊绒纤维光晕', description: '羊绒纤维铺展展示其柔美的光晕纤维，温暖侧光强调蓬松质感。', image: '/photo/09-cashmere-fibers.jpg', sortOrder: 9 },
    { id: 10, stageId: 1, title: '原材料总览', description: '羊毛、羊绒、丝线等多种纺织原材料平铺在亚麻布上，俯拍工作室风格。', image: '/photo/10-textile-raw-materials.jpg', sortOrder: 10 },
    // 设计研发
    { id: 11, stageId: 2, title: '毛衣设计草图', description: '铅笔绘制的毛衣设计草图散落在设计师桌面上，配铅笔和尺子，展示原创设计能力。', image: '/photo/11-sweater-sketches.jpg', sortOrder: 1 },
    { id: 12, stageId: 2, title: '编织图样', description: '方格纸上技术编织图样，展示毛衣结构细节和彩色编码针法。', image: '/photo/12-knitting-pattern-draft.jpg', sortOrder: 2 },
    { id: 13, stageId: 2, title: '面料色卡板', description: '面料色卡板钉在软木板上，搭配色卡和设计笔记，时装工作室场景。', image: '/photo/13-fabric-swatch-board.jpg', sortOrder: 3 },
    { id: 14, stageId: 2, title: '设计工具', description: '量尺、剪刀、别针、划粉等时装设计工具整齐排列在裁剪台上。', image: '/photo/15-measuring-tape-tools.jpg', sortOrder: 4 },
    { id: 15, stageId: 2, title: '样板裁剪', description: '毛衣样板纸型排列在面料上，展示前片、后片、袖片的精确裁剪。', image: '/photo/16-sweater-template-cuts.jpg', sortOrder: 5 },
    { id: 16, stageId: 2, title: '色彩管理', description: '打开的面料色卡本展示各种中性色调针织样品，皮质封面。', image: '/photo/17-color-sample-book.jpg', sortOrder: 6 },
    { id: 17, stageId: 2, title: '纹理样品集合', description: '针织纹理样品集合 — 麻花、罗纹、华夫格、苔藓针法 — 排列成网格展示。', image: '/photo/18-texture-sample-collection.jpg', sortOrder: 7 },
    { id: 18, stageId: 2, title: '数字3D设计', description: '平板电脑上展示3D毛衣渲染效果，旁边是印刷的针织设计参考图。', image: '/photo/19-design-tablet-sketch.jpg', sortOrder: 8 },
    { id: 19, stageId: 2, title: '精确放码', description: '多个尺码的毛衣纸型叠放展开在裁剪台上，展示精确放码标记。', image: '/photo/20-pattern-grading.jpg', sortOrder: 9 },
    // 编织生产
    { id: 20, stageId: 3, title: '工业平织机', description: '现代工业平织机在洁净工厂中，金属表面反射柔和灯光，自动化生产核心设备。', image: '/photo/21-industrial-knitting-machine.jpg', sortOrder: 1 },
    { id: 21, stageId: 3, title: '全成型编织机', description: '先进全成型编织机，直接编织出完整毛衣无需缝合，展示高端制造工艺。', image: '/photo/23-whole-garment-machine.jpg', sortOrder: 2 },
    { id: 22, stageId: 3, title: '纱线送纱系统', description: '编织机纱线张力和送纱系统，奶油色纱线穿过陶瓷导纱器，精密工业细节。', image: '/photo/24-yarn-feeder-system.jpg', sortOrder: 3 },
    { id: 23, stageId: 3, title: '电脑控制面板', description: '电脑编织机数字控制面板，图案编程界面，LED显示屏，智能化生产。', image: '/photo/25-computer-knitting-interface.jpg', sortOrder: 4 },
    { id: 24, stageId: 3, title: '定型模具', description: '弧形金属毛衣定型模具叠放在工厂架子上，用于毛衣整形和熨烫。', image: '/photo/26-sweater-shaping-mold.jpg', sortOrder: 5 },
    { id: 25, stageId: 3, title: '罗纹编织机', description: '编织机罗纹附件正在编织弹性边缘花样，奶油色纱线穿过机构。', image: '/photo/27-ribbing-machine.jpg', sortOrder: 6 },
    { id: 26, stageId: 3, title: '针法细节', description: '编织机上针织面料形成的超近距离特写，奶油色纱线单个线圈清晰可见。', image: '/photo/29-machine-stitch-detail.jpg', sortOrder: 7 },
    { id: 27, stageId: 3, title: '生产车间', description: '现代化毛衣生产车间，自动化编织机排列整齐，明亮LED照明。', image: '/photo/30-factory-production-floor.jpg', sortOrder: 8 },
    { id: 28, stageId: 3, title: '络筒工序', description: '纱线从绞纱缠绕到筒子上的工业络筒工序，奶油色纱线流畅运行。', image: '/photo/31-yarn-winding-process.jpg', sortOrder: 9 },
    { id: 29, stageId: 3, title: '编织中', description: '编织机正在生产中的半成型毛衣片，复杂针法花样逐渐成型。', image: '/photo/32-knitting-in-progress.jpg', sortOrder: 10 },
    { id: 30, stageId: 3, title: '平针编织', description: '工业编织机上编织的平针毛衣片，柔和灰色纱线均匀线迹，精密制造。', image: '/photo/33-panel-knitting.jpg', sortOrder: 11 },
    { id: 31, stageId: 3, title: '套口缝合', description: '圆盘套口机将毛衣各片缝合连接，精细针脚对齐边缘，奶油色针织面料组装。', image: '/photo/34-linking-machine.jpg', sortOrder: 12 },
    { id: 32, stageId: 3, title: '包缝工序', description: '工业包缝机完成毛衣接缝，奶油色针织面料上整齐缝线，工厂工位。', image: '/photo/35-sewing-operation.jpg', sortOrder: 13 },
    { id: 33, stageId: 3, title: '领口安装', description: '罗纹领口通过领口安装机连接到毛衣主体，精确对齐针织边缘。', image: '/photo/40-collar-attachment.jpg', sortOrder: 14 },
    { id: 34, stageId: 3, title: '锁眼工序', description: '锁眼机在开衫前片上制作整洁扣眼，奶油色针织面料，精密操作。', image: '/photo/41-button-holes.jpg', sortOrder: 15 },
    { id: 35, stageId: 3, title: '标签缝制', description: '品牌标签缝制在成品毛衣领口，白色标签搭配奶油色针织，工厂细节特写。', image: '/photo/42-label-sewing.jpg', sortOrder: 16 },
    // 染色整理
    { id: 36, stageId: 4, title: '纱线染色', description: '工业纱线染缸，奶油色纱线浸入染液，温暖蒸汽升起，不锈钢设备。', image: '/photo/46-yarn-dyeing-vat.jpg', sortOrder: 1 },
    { id: 37, stageId: 4, title: '染色成果', description: '染色后的纱线绞晾挂在墙上干燥，从奶油色到炭灰色渐变，展示色彩工艺。', image: '/photo/47-dye-batch-colors.jpg', sortOrder: 2 },
    { id: 38, stageId: 4, title: '湿整理', description: '湿整理过程，针织面料通过辊筒传送，柔化面料手感，工业纺织设备。', image: '/photo/49-wet-finishing.jpg', sortOrder: 3 },
    { id: 39, stageId: 4, title: '蒸汽处理', description: '毛衣在专业蒸汽架上蒸汽处理，轻柔蒸汽放松针织纤维，工作室柔光。', image: '/photo/50-steaming-station.jpg', sortOrder: 4 },
    { id: 40, stageId: 4, title: '柔软处理', description: '针织成衣柔软处理浴，面料在柔软剂中轻柔翻滚，工业纺织加工。', image: '/photo/52-fabric-softening.jpg', sortOrder: 5 },
    { id: 41, stageId: 4, title: '抗起球处理', description: '抗起球处理工位，面料正在接受处理，洁净工业环境。', image: '/photo/53-anti-pilling-treatment.jpg', sortOrder: 6 },
    { id: 42, stageId: 4, title: '热定型', description: '热定型烘箱处理针织成衣，受控温度稳定面料尺寸，工厂设备。', image: '/photo/54-heat-setting.jpg', sortOrder: 7 },
    { id: 43, stageId: 4, title: '最终蒸汽熨烫', description: '完成品毛衣最终蒸汽熨烫，平压机完美定型，蒸汽在温暖灯光中飘散。', image: '/photo/55-final-steam.jpg', sortOrder: 8 },
    { id: 44, stageId: 4, title: '定型整形', description: '毛衣在木质定型板上用大头针固定整形，旁边是蒸汽熨斗，工作室自然光。', image: '/photo/36-blocking-board.jpg', sortOrder: 9 },
    { id: 45, stageId: 4, title: '蒸汽熨烫', description: '成衣蒸汽熨烫工位，工业熨斗压平毛衣，蒸汽在温暖灯光中飘散。', image: '/photo/37-steam-pressing.jpg', sortOrder: 10 },
    // 质量检测
    { id: 46, stageId: 5, title: '手工精修', description: '毛衣精修工位，手工缝纫工具、线头剪、纽扣整齐排列在洁净台面上。', image: '/photo/38-hand-finishing.jpg', sortOrder: 1 },
    { id: 47, stageId: 5, title: '线头修剪', description: '精密修剪毛衣上的多余线头，剪刀剪断线头，整洁的奶油色针织表面。', image: '/photo/39-thread-trimming.jpg', sortOrder: 2 },
    { id: 48, stageId: 5, title: '缺陷检测', description: '放大镜检查针织毛衣表面，确保均匀针法结构和面料品质。', image: '/photo/45-defect-checking.jpg', sortOrder: 3 },
    // 包装物流
    { id: 49, stageId: 6, title: '成品货架', description: '有组织的货架上整齐折叠的中性色调毛衣，零售仓库，系统化存储。', image: '/photo/81-finished-goods-shelf.jpg', sortOrder: 1 },
    { id: 50, stageId: 6, title: '折叠工位', description: '专业毛衣折叠工位，折叠板和整齐折叠的成衣，洁净工作空间。', image: '/photo/82-sweater-folding-station.jpg', sortOrder: 2 },
    { id: 51, stageId: 6, title: '防尘包装', description: '毛衣包裹在薄纸中放入高端防尘袋，整洁包装工位，奢侈品零售准备。', image: '/photo/83-garment-bags.jpg', sortOrder: 3 },
    { id: 52, stageId: 6, title: '礼盒包装', description: '品牌礼盒内折叠毛衣，薄纸和丝带，高端零售包装。', image: '/photo/84-box-packaging.jpg', sortOrder: 4 },
    { id: 53, stageId: 6, title: '挂式陈列', description: '木质展架上毛衣挂在木衣架上，按颜色渐变排列，零售仓库。', image: '/photo/85-hanging-display-rack.jpg', sortOrder: 5 },
    { id: 54, stageId: 6, title: '条码标签', description: '毛衣吊牌条形码标签被贴上，已定价成衣，零售准备环节。', image: '/photo/86-barcode-labeling.jpg', sortOrder: 6 },
    { id: 55, stageId: 6, title: '质检封签', description: '质检合格封签贴在包装好的毛衣上，高端包装细节。', image: '/photo/87-quality-seal.jpg', sortOrder: 7 },
    { id: 56, stageId: 6, title: '库存系统', description: '仓库货架上有组织的毛衣包装和库存标签，系统化存储。', image: '/photo/88-inventory-system.jpg', sortOrder: 8 },
    { id: 57, stageId: 6, title: '保护包装', description: '毛衣装入保护性塑料袋准备发货，洁净包装工位，有序流程。', image: '/photo/89-protective-packaging.jpg', sortOrder: 9 },
    { id: 58, stageId: 6, title: '物流发货', description: '纸板运输箱内装入毛衣包装，打包完毕等待发货，仓库装运区。', image: '/photo/90-shipping-crate.jpg', sortOrder: 10 }
  ],

  // 新闻
  news: [
    {
      id: 1,
      title: '濮尚服饰2026秋冬羊绒新品系列发布',
      summary: '濮尚服饰正式发布2026秋冬羊绒新品系列，涵盖经典圆领、高领、麻花编织等多款设计，以匠心工艺诠释温暖与优雅。',
      content: '濮尚服饰有限公司正式发布2026秋冬羊绒新品系列。本季新品涵盖羊绒圆领毛衣、罗纹高领毛衣、麻花编织套头衫、超细针距套头衫等多款经典设计，以奶油色、驼色、浅蓝色等优雅色调为主打。\n\n本季系列延续了品牌一贯的匠心精神，甄选内蒙古优质山羊绒，15.5微米细度纤维，经过精细梳毛、纺纱、编织工序。全成型编织技术的运用，使得毛衣无需侧缝，穿着更加舒适贴合。\n\n"我们始终相信，最好的产品来自于对每一个细节的执着。"濮尚服饰设计总监表示，"本季新品在保留经典设计的同时，融入了更多现代元素，让传统羊绒服饰焕发新的时尚活力。"\n\n新品系列已于濮尚全线门店及官方渠道同步上市。',
      image: '/photo/56-cashmere-crewneck.jpg',
      publishDate: '2026-09-15',
      status: 1
    },
    {
      id: 2,
      title: '濮尚服饰引入全成型编织技术，提升生产工艺',
      summary: '濮尚服饰引进国际先进的全成型编织设备，实现毛衣一体成型无需缝合，大幅提升产品品质与生产效率。',
      content: '濮尚服饰有限公司近日引进国际先进的全成型编织机（Whole Garment Machine），该设备可直接编织出完整毛衣，无需传统缝合工序。\n\n全成型技术的引入带来了多重优势：首先，消除了侧缝线，穿着更加舒适贴合；其次，减少了面料损耗，更加环保可持续；第三，生产效率显著提升，同时保证了针法的精密与均匀。\n\n除全成型设备外，濮尚还升级了电脑编织控制系统，实现图案编程数字化、智能化生产。工厂车间现有工业平织机、罗纹机、套口机等全套先进设备，形成了从原料到成衣的完整自动化生产线。\n\n"技术创新是我们持续发展的动力。"生产负责人表示，"我们将继续投入先进设备，以科技赋能传统纺织工艺。"',
      image: '/photo/23-whole-garment-machine.jpg',
      publishDate: '2026-07-20',
      status: 1
    },
    {
      id: 3,
      title: '濮尚服饰旗舰店全新升级亮相',
      summary: '濮尚服饰旗舰店完成全面升级改造，双层挑高空间、水晶吊灯、高端陈列，打造沉浸式奢侈品购物体验。',
      content: '濮尚服饰旗舰店近日完成全面升级改造，以全新面貌亮相。升级后的旗舰店拥有双层挑高空间，水晶吊灯营造优雅氛围，高端陈列系统展示全系列产品。\n\n店内设有特色展示墙，毛衣按颜色从奶油色到炭灰色渐变排列，视觉效果震撼。艺术化橱窗展示搭配戏剧化聚光灯效果，成为街区一道亮丽风景线。\n\n此外，店内还设有极简试衣间区域，配备全身镜、柔软地毯和温暖环境灯光，为顾客提供高端购物体验。休闲区提供舒适座椅和柔和灯光，让顾客在购物之余享受惬意时光。\n\n"我们希望旗舰店不仅是销售场所，更是品牌文化的展示空间。"品牌负责人表示，"每一位走进濮尚的顾客，都能感受到我们对品质与美学的追求。"',
      image: '/photo/100-brand-flagship.jpg',
      publishDate: '2026-06-08',
      status: 1
    },
    {
      id: 4,
      title: '濮尚服饰坚持环保染色工艺，践行可持续发展',
      summary: '濮尚服饰采用天然植物染料和环保染色工艺，在保证色彩品质的同时减少环境影响，践行企业社会责任。',
      content: '濮尚服饰有限公司始终将可持续发展作为企业战略的重要组成部分。在染色工序中，公司采用天然植物染料，以大地色调为主，在保证色彩品质的同时大幅减少化学染料对环境的影响。\n\n染色后的纱线经过自然晾干，从奶油色到炭灰色的渐变色彩自然柔和。在后整理环节，公司采用柔软处理、抗起球处理、热定型等多道工序，赋予面料完美手感与耐久性能。\n\n此外，濮尚在全成型编织中减少了面料损耗，包装环节使用可回收材料，从生产到物流全链条践行环保理念。\n\n"可持续发展不是口号，而是每一个生产环节的选择。"公司负责人表示，"我们将继续探索环保工艺，为行业绿色发展贡献力量。"',
      image: '/photo/06-natural-dye-pigments.jpg',
      publishDate: '2026-05-12',
      status: 1
    }
  ],

  // 画廊
  gallery: [
    // 品牌视觉
    { id: 1, title: '品牌主视觉', description: '模特穿着优雅羊绒毛衣在极简大理石画廊中，黄金时段光线透过拱形窗户', image: '/photo/01-hero-fashion.jpg', category: '品牌视觉', sortOrder: 1 },
    { id: 2, title: '品牌故事', description: '优雅的时装店内景，展示架上的羊绒毛衣系列，温暖环境灯光', image: '/photo/04-brand-story.jpg', category: '品牌视觉', sortOrder: 2 },
    { id: 3, title: '匠心氛围', description: '现代时装工作室，自然光透过天窗，中性色调面料悬挂', image: '/photo/06-heritage-atmosphere.jpg', category: '品牌视觉', sortOrder: 3 },
    { id: 4, title: '品牌旗舰', description: '奢侈羊绒品牌旗舰店内景全景，双层挑高空间，水晶吊灯', image: '/photo/100-brand-flagship.jpg', category: '品牌视觉', sortOrder: 4 },
    // 成品展示
    { id: 5, title: '精致折叠产品', description: '精致折叠的奢侈羊绒毛衣置于白色大理石台面，柔光摄影', image: '/photo/02-product-sweater.jpg', category: '成品展示', sortOrder: 1 },
    { id: 6, title: '羊绒圆领毛衣', description: '优质羊绒圆领毛衣，柔象牙色，精致折叠在白色大理石上', image: '/photo/56-cashmere-crewneck.jpg', category: '成品展示', sortOrder: 2 },
    { id: 7, title: '罗纹高领毛衣', description: '优雅罗纹高领毛衣，驼色，挂在极简衣架上', image: '/photo/57-ribbed-turtleneck.jpg', category: '成品展示', sortOrder: 3 },
    { id: 8, title: '麻花编织套头衫', description: '经典麻花编织套头衫，奶油色，平铺展示复杂编织花样', image: '/photo/58-cable-knit-pullover.jpg', category: '成品展示', sortOrder: 4 },
    { id: 9, title: 'V领精纺毛衣', description: '精致V领精纺毛衣，海军蓝，精确折叠在浅色台面上', image: '/photo/60-v-neck-fine-knit.jpg', category: '成品展示', sortOrder: 5 },
    { id: 10, title: '半拉链毛衣', description: '半拉链美利奴羊毛毛衣，炭灰色，拉链半开平铺', image: '/photo/62-half-zip-sweater.jpg', category: '成品展示', sortOrder: 6 },
    { id: 11, title: '圆领叠穿', description: '奶油色圆领毛衣搭配白衬衫领口叠穿，整齐折叠', image: '/photo/63-crewneck-layered.jpg', category: '成品展示', sortOrder: 7 },
    { id: 12, title: '几何花纹', description: '带几何针织花样的毛衣，同色系灰色，平铺展示图案细节', image: '/photo/64-patterned-knit.jpg', category: '成品展示', sortOrder: 8 },
    { id: 13, title: '羊绒背心', description: '羊绒V领背心，驼色，置于极简展架上', image: '/photo/65-cashmere-vest.jpg', category: '成品展示', sortOrder: 9 },
    { id: 14, title: '华夫格针织', description: '华夫格针织毛衣，浅灰色，展示纹理表面', image: '/photo/66-waffle-knit.jpg', category: '成品展示', sortOrder: 10 },
    { id: 15, title: '超细针距', description: '超细针距套头衫，浅蓝色，表面光滑如丝', image: '/photo/68-fine-gauge-pullover.jpg', category: '成品展示', sortOrder: 11 },
    { id: 16, title: '毛圈针织', description: '毛圈针织毛衣，柔白色，独特环状表面纹理', image: '/photo/69-boucle-knit.jpg', category: '成品展示', sortOrder: 12 },
    { id: 17, title: '美利奴拉链', description: '美利奴四分之一拉链套头衫，麻灰色，简洁台面', image: '/photo/70-merino-quarter-zip.jpg', category: '成品展示', sortOrder: 13 },
    // 面料纹理
    { id: 18, title: '麻花纹理', description: '麻花编织纹理超近距离特写，奶油色纱线三维立体辫子绳索结构', image: '/photo/71-cable-knit-texture.jpg', category: '面料纹理', sortOrder: 1 },
    { id: 19, title: '罗纹纹理', description: '罗纹针织纹理特写，展示正反针交替的垂直条纹，奶油色', image: '/photo/72-rib-knit-detail.jpg', category: '面料纹理', sortOrder: 2 },
    { id: 20, title: '苔藓针法', description: '苔藓针法纹理微距，小凸点形成卵石状表面，温暖中性色纱线', image: '/photo/73-moss-stitch-texture.jpg', category: '面料纹理', sortOrder: 3 },
    { id: 21, title: '华夫格纹理', description: '华夫格针织纹理特写，方形网格图案，柔和灰色立体表面', image: '/photo/74-waffle-texture.jpg', category: '面料纹理', sortOrder: 4 },
    { id: 22, title: '嵌花图案', description: '嵌花色块针织图案特写，中性色调间平滑色彩过渡', image: '/photo/75-intarsia-pattern.jpg', category: '面料纹理', sortOrder: 5 },
    { id: 23, title: '费尔岛提花', description: '费尔岛提花针织图案，柔和大地色调，传统北欧风格图案', image: '/photo/76-fair-isle-detail.jpg', category: '面料纹理', sortOrder: 6 },
    { id: 24, title: '镂空针织', description: '精致镂空针织，奶油色纱线小装饰孔洞形成蕾丝般图案', image: '/photo/77-pointelle-knit.jpg', category: '面料纹理', sortOrder: 7 },
    { id: 25, title: '提花面料', description: '提花针织面料特写，精致编织图案，同色调', image: '/photo/78-jacquard-weave.jpg', category: '面料纹理', sortOrder: 8 },
    { id: 26, title: '羊绒光晕', description: '羊绒面料表面微距，展示柔美光晕效果，单根纤维捕捉光线', image: '/photo/79-cashmere-halo.jpg', category: '面料纹理', sortOrder: 9 },
    { id: 27, title: '线迹定义', description: '超近距离展示精纺针织完美线迹定义，每个线圈清晰分明', image: '/photo/80-stitch-definition.jpg', category: '面料纹理', sortOrder: 10 },
    // 门店形象
    { id: 28, title: '门店外观', description: '优雅奢侈羊绒品牌门店外观，黄昏时分，温暖灯光透过玻璃窗', image: '/photo/91-storefront-exterior.jpg', category: '门店形象', sortOrder: 1 },
    { id: 29, title: '店内空间', description: '宽敞的奢侈羊绒品牌店内景，木质地板，极简陈列架', image: '/photo/92-store-interior.jpg', category: '门店形象', sortOrder: 2 },
    { id: 30, title: '橱窗展示', description: '艺术化橱窗展示，高端毛衣陈列在几何展台上，戏剧化聚光灯', image: '/photo/93-window-display.jpg', category: '门店形象', sortOrder: 3 },
    { id: 31, title: '特色展示墙', description: '特色展示墙，毛衣按颜色渐变从奶油色到炭灰色排列', image: '/photo/94-featured-wall.jpg', category: '门店形象', sortOrder: 4 },
    { id: 32, title: '试衣间', description: '极简试衣间区域，全身镜，柔软地毯，温暖环境灯光', image: '/photo/95-fitting-area.jpg', category: '门店形象', sortOrder: 5 },
    { id: 33, title: '季节性展示', description: '季节性针织展台，秋色调毛衣搭配装饰枝条，温暖零售氛围', image: '/photo/97-seasonal-display.jpg', category: '门店形象', sortOrder: 6 },
    { id: 34, title: '配饰展架', description: '配饰展架，针织围巾、毛线帽和手套与毛衣搭配展示', image: '/photo/98-accessories-shelf.jpg', category: '门店形象', sortOrder: 7 },
    { id: 35, title: '休闲区', description: '奢侈羊绒品牌店内休闲区，舒适座椅，柔和灯光', image: '/photo/99-lounge-area.jpg', category: '门店形象', sortOrder: 8 }
  ],

  // 画廊分类
  galleryCategories: ['品牌视觉', '成品展示', '面料纹理', '门店形象']
};

/**
 * 数据访问API（模拟后端接口）
 */
window.API = {
  getCompanyInfo() {
    return { code: 200, data: window.STATIC_DATA.companyInfo };
  },
  getCategories() {
    return { code: 200, data: window.STATIC_DATA.categories };
  },
  getProducts(categoryId) {
    let products = window.STATIC_DATA.products;
    if (categoryId) {
      products = products.filter(p => p.categoryId === categoryId);
    }
    return { code: 200, data: products };
  },
  getFeaturedProducts() {
    return { code: 200, data: window.STATIC_DATA.products.filter(p => p.isFeatured === 1) };
  },
  getProductDetail(id) {
    const product = window.STATIC_DATA.products.find(p => p.id === parseInt(id));
    return { code: 200, data: product };
  },
  getStages() {
    return { code: 200, data: window.STATIC_DATA.stages };
  },
  getProcesses(stageId) {
    let processes = window.STATIC_DATA.processes;
    if (stageId) {
      processes = processes.filter(p => p.stageId === parseInt(stageId));
    }
    return { code: 200, data: processes };
  },
  getNewsList() {
    return { code: 200, data: window.STATIC_DATA.news };
  },
  getNewsDetail(id) {
    const news = window.STATIC_DATA.news.find(n => n.id === parseInt(id));
    return { code: 200, data: news };
  },
  getGalleryList(category) {
    let gallery = window.STATIC_DATA.gallery;
    if (category) {
      gallery = gallery.filter(g => g.category === category);
    }
    return { code: 200, data: gallery };
  },
  getGalleryCategories() {
    return { code: 200, data: window.STATIC_DATA.galleryCategories };
  }
};
