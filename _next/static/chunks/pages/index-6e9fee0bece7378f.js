(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(2612)}])},2612:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return pages}});var jsx_runtime=__webpack_require__(5893),motion=__webpack_require__(7910),styles_0={innerWidth:"2xl:max-w-[1280px] w-full",interWidth:"lg:w-[80%] w-[100%]",paddings:"sm:p-16 xs:p-8 px-6 py-12",yPaddings:"sm:py-16 xs:py-8 py-12",xPaddings:"sm:px-16 px-6",topPaddings:"sm:pt-16 xs:pt-8 pt-12",bottomPaddings:"sm:pb-16 xs:pb-8 pb-12",flexCenter:"flex justify-center items-center",flexStart:"flex justify-start items-start",flexEnd:"flex justify-end",navPadding:"pt-[98px]",heroHeading:"font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white",heroDText:"md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]"};let navVariants={hidden:{opacity:0,y:-50,transition:{type:"spring",stiffness:300,damping:140}},show:{opacity:1,y:0,transition:{type:"spring",stiffness:80,delay:1}}},slideIn=(direction,type,delay,duration)=>({hidden:{x:"left"===direction?"-100%":"right"===direction?"100%":0,y:"up"===direction?"100%":"down"===direction?"100%":0},show:{x:0,y:0,transition:{type,delay,duration,ease:"easeOut"}}}),staggerContainer=(staggerChildren,delayChildren)=>({hidden:{},show:{transition:{staggerChildren,delayChildren}}}),textVariant=delay=>({hidden:{y:50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay}}}),textContainer={hidden:{opacity:0},show:function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{opacity:1,transition:{staggerChildren:.1,delayChildren:.1*i}}}},textVariant2={hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{type:"tween",ease:"easeIn"}}},fadeIn=(direction,type,delay,duration)=>({hidden:{x:"left"===direction?100:"right"===direction?-100:0,y:"up"===direction?100:"down"===direction?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type,delay,duration,ease:"easeOut"}}}),planetVariants=direction=>({hidden:{x:"left"===direction?"-100%":"100%",rotate:120},show:{x:0,rotate:0,transition:{type:"spring",duration:1.8,delay:.5}}}),zoomIn=(delay,duration)=>({hidden:{scale:0,opacity:0},show:{scale:1,opacity:1,transition:{type:"tween",delay,duration,ease:"easeOut"}}}),footerVariants={hidden:{opacity:0,y:50,transition:{type:"spring",stiffness:300,damping:140}},show:{opacity:1,y:0,transition:{type:"spring",stiffness:80,delay:.5}}},Navbar=()=>(0,jsx_runtime.jsxs)(motion.E.nav,{variants:navVariants,initial:"hidden",whileInView:"show",className:"".concat(styles_0.xPaddings," py-8 relative"),children:[(0,jsx_runtime.jsx)("div",{className:"absolute w-[50%] inset-0 gradient-01"}),(0,jsx_runtime.jsxs)("div",{className:"".concat(styles_0.innerWidth," mx-auto flex justify-between gap-8"),children:[(0,jsx_runtime.jsx)("img",{src:"/search.svg",alt:"search",className:"w-[24px] h-[24px] object-contain"}),(0,jsx_runtime.jsx)("h2",{className:"font-extrabold text-[24px] leading-[30px] text-white",children:"METAVERSUS"}),(0,jsx_runtime.jsx)("img",{src:"menu.svg",alt:"menu",className:"w-[24px] h-[24px] object-contain"})]})]}),TypingText=param=>{let{title,textStyles}=param;return(0,jsx_runtime.jsx)(motion.E.p,{variants:textContainer,className:"font-normal text-[14px] text-secondary-white ".concat(textStyles),children:Array.from(title).map((letter,index)=>(0,jsx_runtime.jsx)(motion.E.span,{variants:textVariant2,children:" "===letter?"\xa0":letter},index))})},TitleText=param=>{let{title,textStyles}=param;return(0,jsx_runtime.jsx)(motion.E.h2,{variants:textVariant2,initial:"hidden",whileInView:"show",className:"mt-[8px] font-bold md:text-[64px] text-[40px] text-white ".concat(textStyles),children:title})},ExploreCard=param=>{let{id,imgUrl,title,index,active,handleClick}=param;return(0,jsx_runtime.jsxs)(motion.E.div,{variants:fadeIn("right","spring",.5*index,.75),className:"relative ".concat(active===id?"lg:flex-[3.5] flex-[10]":"lg:flex-[0.5] flex-[2]"," flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer"),onClick:()=>handleClick(id),children:[(0,jsx_runtime.jsx)("img",{src:imgUrl,alt:"planet-04",className:"absolute w-full h-full object-cover rounded-[24px]"}),active!==id?(0,jsx_runtime.jsx)("h3",{className:"font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]",children:title}):(0,jsx_runtime.jsxs)("div",{className:"absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]",children:[(0,jsx_runtime.jsx)("div",{className:"".concat(styles_0.flexCenter," w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]"),children:(0,jsx_runtime.jsx)("img",{src:"/headset.svg",alt:"headset",className:"w-1/2 h-1/2 object-contain"})}),(0,jsx_runtime.jsx)("p",{className:"font-normal text-[16px] leading-[20.16px] text-white uppercase",children:"Enter Metaverse"}),(0,jsx_runtime.jsx)("h2",{className:"mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white",children:title})]})]})},StartSteps=param=>{let{number,text}=param;return(0,jsx_runtime.jsxs)("div",{className:"".concat(styles_0.flexCenter," flex-row"),children:[(0,jsx_runtime.jsx)("div",{className:"".concat(styles_0.flexCenter," w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]"),children:(0,jsx_runtime.jsx)("p",{className:"font-bold text-[20px] text-white",children:number})}),(0,jsx_runtime.jsx)("p",{className:"flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]",children:text})]})},NewFeatures=param=>{let{imgUrl,title,subtitle}=param;return(0,jsx_runtime.jsxs)("div",{className:"flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]",children:[(0,jsx_runtime.jsx)("div",{className:"".concat(styles_0.flexCenter," w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]"),children:(0,jsx_runtime.jsx)("img",{src:imgUrl,alt:"icon",className:"w-1/2 h-1/2 object-contain"})}),(0,jsx_runtime.jsxs)("h1",{className:"mt-[26px] font-bold text-[24px] leading-[30.24px] text-white",children:["Title ",title]}),(0,jsx_runtime.jsx)("p",{className:"flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]",children:subtitle})]})},InsightCard=param=>{let{imgUrl,title,subtitle,index}=param;return(0,jsx_runtime.jsxs)(motion.E.div,{variants:fadeIn("up","spring",.5*index,1),className:"flex md:flex-row flex-col gap-4",children:[(0,jsx_runtime.jsx)("img",{src:imgUrl,alt:"planet-01",className:"md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"}),(0,jsx_runtime.jsxs)("div",{className:"w-full flex justify-between items-center",children:[(0,jsx_runtime.jsxs)("div",{className:"flex-1 md:ml-[62px] flex flex-col max-w-[650px]",children:[(0,jsx_runtime.jsx)("h4",{className:"font-normal lg:text-[42px] text-[26px] text-white",children:title}),(0,jsx_runtime.jsx)("p",{className:"mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white",children:subtitle})]}),(0,jsx_runtime.jsx)("div",{className:"lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white",children:(0,jsx_runtime.jsx)("img",{src:"/arrow.svg",alt:"arrow",className:"w-[40%] h-[40%] object-contain"})})]})]})},exploreWorlds=[{id:"world-1",imgUrl:"/planet-01.png",title:"The Hogwarts"},{id:"world-2",imgUrl:"/planet-02.png",title:"The Upside Down"},{id:"world-3",imgUrl:"/planet-03.png",title:"Kadirojo Permai"},{id:"world-4",imgUrl:"/planet-04.png",title:"Paradise Island"},{id:"world-5",imgUrl:"/planet-05.png",title:"Hawkins Labs"}],startingFeatures=["Find a world that suits you and you want to enter","Enter the world by reading basmalah to be safe","No need to beat around the bush, just stay on the gas and have fun"],newFeatures=[{imgUrl:"/vrpano.svg",title:"A new world",subtitle:"we have the latest update with new world for you to try never mind"},{imgUrl:"/headset.svg",title:"More realistic",subtitle:"In the latest update, your eyes are narrow, making the world more realistic than ever"}],insights=[{imgUrl:"/planet-06.png",title:"The launch of the Metaverse makes Elon musk ketar-ketir",subtitle:"Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique."},{imgUrl:"/planet-07.png",title:"7 tips to easily master the madness of the Metaverse",subtitle:"Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum"},{imgUrl:"/planet-08.png",title:"With one platform you can explore the whole world virtually",subtitle:"Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem"}],socials=[{name:"twitter",url:"/twitter.svg"},{name:"linkedin",url:"/linkedin.svg"},{name:"instagram",url:"/instagram.svg"},{name:"facebook",url:"/facebook.svg"}],Footer=()=>(0,jsx_runtime.jsxs)(motion.E.footer,{variants:footerVariants,initial:"hidden",whileInView:"show",className:"".concat(styles_0.xPaddings," py-8 relative"),children:[(0,jsx_runtime.jsx)("div",{className:"footer-gradient"}),(0,jsx_runtime.jsxs)("div",{className:"".concat(styles_0.innerWidth," mx-auto flex flex-col gap-8"),children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-5",children:[(0,jsx_runtime.jsx)("h4",{className:"font-bold md:text-[64px] text-[44px] text-white",children:"Enter the Metaverse"}),(0,jsx_runtime.jsxs)("button",{type:"button",className:"flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]",children:[(0,jsx_runtime.jsx)("img",{src:"/headset.svg",alt:"headset",className:"w-[24px] h-[24px] object-contain"}),(0,jsx_runtime.jsx)("span",{className:"font-normal text-[16px] text-white",children:"Enter Metaverse"})]})]}),(0,jsx_runtime.jsxs)("div",{className:"flex flex-col",children:[(0,jsx_runtime.jsx)("div",{className:"mb-[50px] h-[2px] bg-white opacity-10"}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-4",children:[(0,jsx_runtime.jsx)("h4",{className:"font-extrabold text-[24px] text-white",children:"METAVERUS"}),(0,jsx_runtime.jsx)("p",{className:"font-normal text-[14px] text-white opacity-50",children:"Copyright \xa9 2022 - 2023 Metaversus. All rights reserved."}),(0,jsx_runtime.jsx)("div",{className:"flex gap-4",children:socials.map(social=>(0,jsx_runtime.jsx)("img",{src:social.url,alt:social.name,className:"w-[24px] h-[24px] object-contain cursor-pointer"},social.name))})]})]})]})]}),Hero=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.yPaddings," sm:pl-16 pl-6"),children:(0,jsx_runtime.jsxs)(motion.E.div,{variants:staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex flex-col"),children:[(0,jsx_runtime.jsxs)("div",{className:"flex justify-center items-center flex-col relative z-10",children:[(0,jsx_runtime.jsx)(motion.E.h1,{variants:textVariant(1.1),className:styles_0.heroHeading,children:"Metaverse"}),(0,jsx_runtime.jsxs)(motion.E.div,{variants:textVariant(1.2),className:"flex flex-row justify-center items-center",children:[(0,jsx_runtime.jsx)("h1",{className:styles_0.heroHeading,children:"Ma"}),(0,jsx_runtime.jsx)("div",{className:styles_0.heroDText}),(0,jsx_runtime.jsx)("h1",{className:styles_0.heroHeading,children:"Ness"})]})]}),(0,jsx_runtime.jsxs)(motion.E.div,{variants:slideIn("right","tween",.2,1),className:"relative w-full md:-mt-[20px] -mt-[12px]",children:[(0,jsx_runtime.jsx)("div",{className:"absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]"}),(0,jsx_runtime.jsx)("img",{src:"/cover.png",alt:"cover",className:"w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"}),(0,jsx_runtime.jsx)("a",{href:"#explore",children:(0,jsx_runtime.jsx)("div",{className:"w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10",children:(0,jsx_runtime.jsx)("img",{src:"/stamp.png",alt:"stamp",className:"sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"})})})]})]})}),About=()=>(0,jsx_runtime.jsxs)("section",{className:"".concat(styles_0.paddings," relative z-10"),children:[(0,jsx_runtime.jsx)("div",{className:"gradient-02 z-0"}),(0,jsx_runtime.jsxs)(motion.E.div,{variants:staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto ").concat(styles_0.flexCenter," flex-col"),children:[(0,jsx_runtime.jsx)(TypingText,{title:"| About Metaversus",textStyles:"text-center"}),(0,jsx_runtime.jsxs)(motion.E.p,{variants:fadeIn("up","tween",.2,1),className:"mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white",children:[(0,jsx_runtime.jsx)("span",{className:"font-extrabold text-white",children:"Metaverse"})," is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the",(0,jsx_runtime.jsx)("span",{className:"font-extrabold text-white",children:"madness of the metaverse"})," ","of today, using only",(0,jsx_runtime.jsx)("span",{className:"font-extrabold text-white",children:"VR"})," devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's",(0,jsx_runtime.jsx)("span",{className:"font-extrabold text-white",children:"explore"})," the madness of the metaverse by scrolling down"]}),(0,jsx_runtime.jsx)(motion.E.img,{variants:fadeIn("up","tween",.3,1),src:"/arrow-down.svg",alt:"arrown down",className:"w-[18px] h-[28px] object-contain mt-[28px]"})]}),"About section"]});var react=__webpack_require__(7294);let Explore=()=>{let[active,setActive]=(0,react.useState)("world-2");return(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings),id:"explore",children:(0,jsx_runtime.jsxs)(motion.E.div,{variants:staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex flex-col"),children:[(0,jsx_runtime.jsx)(TypingText,{title:"| The World",textStyles:"text-center"}),(0,jsx_runtime.jsx)(TitleText,{title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Choose the world you want ",(0,jsx_runtime.jsx)("br",{className:"md:block hidden"})," to explore"]}),textStyles:"text-center"}),(0,jsx_runtime.jsx)("div",{className:"mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5",children:exploreWorlds.map((world,index)=>(0,jsx_runtime.jsx)(ExploreCard,{...world,index:index,active:active,handleClick:setActive},world.id))})]})})},GetStarted=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings," relative z-10"),children:(0,jsx_runtime.jsxs)(motion.E.div,{variants:staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex lg:flex-row flex-col gap-8"),children:[(0,jsx_runtime.jsx)(motion.E.div,{variants:planetVariants("left"),className:"flex-1 ".concat(styles_0.flexCenter),children:(0,jsx_runtime.jsx)("img",{src:"/get-started.png",alt:"get-started",className:"w-[90%] h-[90%] object-contain"})}),(0,jsx_runtime.jsxs)(motion.E.div,{variants:fadeIn("left","tween",.2,1),className:"flex-[0.75] flex justify-center flex-col",children:[(0,jsx_runtime.jsx)(TypingText,{title:"| How Metaversus Works"}),(0,jsx_runtime.jsx)(TitleText,{title:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Get started with just a few clicks"})}),(0,jsx_runtime.jsx)("div",{className:"mt-[31px] flex flex-col max-w-[370px] gap-[24px]",children:startingFeatures.map((feature,index)=>(0,jsx_runtime.jsx)(StartSteps,{number:"".concat(index<10?"0":""," ").concat(index+1),text:feature},feature))})]})]})}),WhatsNew=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings," relative z-10"),children:(0,jsx_runtime.jsxs)(motion.E.div,{variants:staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex lg:flex-row flex-col gap-8"),children:[(0,jsx_runtime.jsxs)(motion.E.div,{variants:fadeIn("right","tween",.2,1),className:"flex-[0.95] flex justify-center flex-col",children:[(0,jsx_runtime.jsx)(TypingText,{title:"| Whats new?"}),(0,jsx_runtime.jsx)(TitleText,{title:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"What's new about Metaversus?"})}),(0,jsx_runtime.jsx)("div",{className:"mt-[48px] flex flex-wrap justify-between gap-[24px]",children:newFeatures.map(feature=>(0,jsx_runtime.jsx)(NewFeatures,{...feature},feature.title))})]}),(0,jsx_runtime.jsx)(motion.E.div,{variants:planetVariants("right"),className:"flex-1 ".concat(styles_0.flexCenter),children:(0,jsx_runtime.jsx)("img",{src:"/whats-new.png",alt:"get-started",className:"w-[90%] h-[90%] object-contain"})})]})}),World=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings," relative z-10"),children:(0,jsx_runtime.jsxs)(motion.E.div,{variants:staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex flex-col"),children:[(0,jsx_runtime.jsx)(TypingText,{title:"| People on the World",textStyles:"text-center"}),(0,jsx_runtime.jsx)(TitleText,{title:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Track friends around you and invite them to play together in the same world"}),textStyles:"text-center"}),(0,jsx_runtime.jsxs)(motion.E.div,{variants:fadeIn("up","tween",.3,1),className:"relative mt-[68px] flex w-full h-[550px]",children:[(0,jsx_runtime.jsx)("img",{src:"/map.png",alt:"map",className:"w-full h-full object-cover"}),(0,jsx_runtime.jsx)("div",{className:"absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]",children:(0,jsx_runtime.jsx)("img",{src:"people-01.png",alt:"people",className:"w-full h-full"})}),(0,jsx_runtime.jsx)("div",{className:"absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]",children:(0,jsx_runtime.jsx)("img",{src:"/people-02.png",alt:"people",className:"w-full h-full"})}),(0,jsx_runtime.jsx)("div",{className:"absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]",children:(0,jsx_runtime.jsx)("img",{src:"people-03.png",alt:"people",className:"w-full h-full"})})]})]})}),Insights=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings," relative z-10"),children:(0,jsx_runtime.jsxs)(motion.E.div,{variants:staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex flex-col"),children:[(0,jsx_runtime.jsx)(TypingText,{title:"| Insight",textStyles:"text-center"}),(0,jsx_runtime.jsx)(TitleText,{title:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Insight about metaverse"}),textStyles:"text-center"}),(0,jsx_runtime.jsx)("div",{className:"mt-[50px] flex flex-col gap-[30px]",children:insights.map((item,index)=>(0,jsx_runtime.jsx)(InsightCard,{...item,index:index+1},"insight-".concat(index)))})]})}),Feedback=()=>(0,jsx_runtime.jsx)("section",{className:"".concat(styles_0.paddings),children:(0,jsx_runtime.jsxs)(motion.E.div,{variants:staggerContainer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},className:"".concat(styles_0.innerWidth," mx-auto flex lg:flex-row flex-col gap-6"),children:[(0,jsx_runtime.jsxs)(motion.E.div,{variants:fadeIn("right","tween",.2,1),className:"flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative",children:[(0,jsx_runtime.jsx)("div",{className:"feedback-gradient"}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h4",{className:"font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white",children:"Samantha"}),(0,jsx_runtime.jsx)("p",{className:"mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white",children:"Founder Metaverus"})]}),(0,jsx_runtime.jsx)("p",{className:"mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white",children:"“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”"})]}),(0,jsx_runtime.jsxs)(motion.E.div,{variants:fadeIn("left","tween",.2,1),className:"relative flex-1 flex justify-center items-center",children:[(0,jsx_runtime.jsx)("img",{src:"/planet-09.png",alt:"planet-09",className:"w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"}),(0,jsx_runtime.jsx)(motion.E.div,{variants:zoomIn(.4,1),className:"lg:block hidden absolute -left-[10%] top-[3%]",children:(0,jsx_runtime.jsx)("img",{src:"/stamp.png",alt:"stamp",className:"w-[155px] h-[155px] object-contain"})})]})]})}),Page=()=>(0,jsx_runtime.jsxs)("div",{className:"bg-primary-black overflow-hidden",children:[(0,jsx_runtime.jsx)(Navbar,{}),(0,jsx_runtime.jsx)(Hero,{}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)(About,{}),(0,jsx_runtime.jsx)("div",{className:"gradient-03 z-0"}),(0,jsx_runtime.jsx)(Explore,{})]}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)(GetStarted,{}),(0,jsx_runtime.jsx)("div",{className:"gradient-04 z-0"}),(0,jsx_runtime.jsx)(WhatsNew,{})]}),(0,jsx_runtime.jsx)(World,{}),(0,jsx_runtime.jsxs)("div",{className:"relative",children:[(0,jsx_runtime.jsx)(Insights,{}),(0,jsx_runtime.jsx)("div",{className:"gradient-04 z-0"}),(0,jsx_runtime.jsx)(Feedback,{})]}),(0,jsx_runtime.jsx)(Footer,{})]});var pages=Page}},function(__webpack_require__){__webpack_require__.O(0,[910,774,888,179],function(){return __webpack_require__(__webpack_require__.s=5557)}),_N_E=__webpack_require__.O()}]);