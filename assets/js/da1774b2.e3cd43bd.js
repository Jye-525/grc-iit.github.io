"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[4956],{3349:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=i(5893),s=i(1151);const a={},t="CM1",l={id:"jarvis/jarvis-cd/packages/cm1",title:"CM1",description:"Dependencies",source:"@site/docs/05-jarvis/02-jarvis-cd/08-packages/cm1.md",sourceDirName:"05-jarvis/02-jarvis-cd/08-packages",slug:"/jarvis/jarvis-cd/packages/cm1",permalink:"/docs/jarvis/jarvis-cd/packages/cm1",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python API",permalink:"/docs/jarvis/jarvis-cd/python-api"},next:{title:"DeepDriveMD",permalink:"/docs/jarvis/jarvis-cd/packages/deepdrivemd"}},c={},o=[{value:"Dependencies",id:"dependencies",level:2},{value:"Compiling/Installing",id:"compilinginstalling",level:2},{value:"General Usage",id:"general-usage",level:2},{value:"Brief overview of <code>namelist.input</code>",id:"brief-overview-of-namelistinput",level:2},{value:"Radiative Convective Equilibrium",id:"radiative-convective-equilibrium",level:2},{value:"Near Future",id:"near-future",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"cm1",children:"CM1"})}),"\n",(0,r.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"spack install intel-oneapi-compilers\nspack load intel-oneapi-compilers\nspack compilers add\nspack install h5z-zfp%intel\n"})}),"\n",(0,r.jsx)(n.h2,{id:"compilinginstalling",children:"Compiling/Installing"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:lukemartinlogan/cm1r19.8-LOFS.git\ncd cm1r19.8-LOFS\n# COREX * COREY is the number of cores you intend to use on the system\n# They do not need to be 2 and 2 here, but this is how our configurations are compiled for now\nCOREX=2 COREY=2 bash buildCM1-spack.sh\nexport PATH=${PWD}/run:${PATH}\nexport CM1_PATH=${PWD}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"general-usage",children:"General Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mpirun -n [COREX * COREY] ${CM1_PATH}/run/cm1.exe [namelist.input] [output_dir] [filename_base] [restart_dir]\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"output_dir: the directory where simulation output goes"}),"\n",(0,r.jsx)(n.li,{children:"filename_base: the name of the simulation file to generate"}),"\n",(0,r.jsx)(n.li,{children:"restart_dir: a directory to store checkpoints for a restart (I believe)"}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"brief-overview-of-namelistinput",children:["Brief overview of ",(0,r.jsx)(n.code,{children:"namelist.input"})]}),"\n",(0,r.jsx)(n.p,{children:"The following variables define the dimensions of a 3D grid"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"nx           =      16,\nny           =      16,\nnz           =      16,\n"})}),"\n",(0,r.jsx)(n.p,{children:"I set them lower to reduce extreme memory consumption in single-node cases."}),"\n",(0,r.jsx)(n.p,{children:"These variables must be set relatively to COREX and COREY."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" nodex        =       2, !nuke\n nodey        =       2, !nuke\n rankx        =       2,\n ranky        =       2,\n"})}),"\n",(0,r.jsx)(n.p,{children:"You must satisfy the following constraints when setting these:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"rankx _ ranky = COREX _ COREY"}),"\n",(0,r.jsx)(n.li,{children:"rankx > corex and ranky > corey"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"radiative-convective-equilibrium",children:"Radiative Convective Equilibrium"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ${CM1_PATH}/run/config_files/cpm_RadConvEquil\nmkdir output\nmpirun -n 4 ${CM1_PATH}/run/cm1.exe  ${CM1_PATH}/run/namelist.input.nssl3 output ex output\n"})}),"\n",(0,r.jsx)(n.h2,{id:"near-future",children:"Near Future"}),"\n",(0,r.jsx)(n.p,{children:"Make a jarvis-cd package to automate all of these odd constraints for benchmarking and deployment"})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>t});var r=i(7294);const s={},a=r.createContext(s);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);