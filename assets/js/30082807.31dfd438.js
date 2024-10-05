"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[7806],{4500:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=r(5893),t=r(1151);const i={},o="Developer Guide",a={id:"hermes/developer-guide",title:"Developer Guide",description:"Hermes can be complicated to debug due to its distributed and asynchronous",source:"@site/docs/03-hermes/10-developer-guide.md",sourceDirName:"03-hermes",slug:"/hermes/developer-guide",permalink:"/docs/hermes/developer-guide",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Containers",permalink:"/docs/hermes/containers"},next:{title:"Doxygen",permalink:"/docs/hermes/doxygen"}},l={},c=[{value:"Hermes Repo Structure",id:"hermes-repo-structure",level:2},{value:"Preparing Pull Request (PR)",id:"preparing-pull-request-pr",level:2},{value:"PR Check Failure",id:"pr-check-failure",level:2},{value:"Containerized Hermes",id:"containerized-hermes",level:2},{value:"Remote Debugging",id:"remote-debugging",level:2},{value:"Preparing For Release",id:"preparing-for-release",level:2},{value:"Introduction to our Continuous Integration (CI)",id:"introduction-to-our-continuous-integration-ci",level:2},{value:"Adding a New Adapter",id:"adding-a-new-adapter",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"developer-guide",children:"Developer Guide"})}),"\n",(0,s.jsx)(n.p,{children:"Hermes can be complicated to debug due to its distributed and asynchronous\nnature. Faults can happen in the client program, or in the Hermes daemon.\nThe first step when encountering problems is to compile in Debug mode."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmake",children:"cmake .. -DCMAKE_BUILD_TYPE=Debug\n"})}),"\n",(0,s.jsx)(n.p,{children:"The Debug mode will increase the number of logging statements the program\nuses to give you a stronger hint as to where the problem occurs. These\nstatements are typically compiled out for performance reasons."}),"\n",(0,s.jsx)(n.p,{children:"Secondly, make sure to use an IDE which supports visual debugging. Debugging\nusing a terminal with gdb can be very cumbersome, especially when multi-process cases come along."}),"\n",(0,s.jsx)(n.h2,{id:"hermes-repo-structure",children:"Hermes Repo Structure"}),"\n",(0,s.jsx)(n.p,{children:"The Hermes repo is organized as follows:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hrun"})," is the Hermes runtime and contains all source files / includes for it. This includes queuing and network code."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"tasks"})," contains the majority of Hermes implementation. These are tasks that execute in the Hermes runtime"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"src"})," contains a single source file that is used to construct the Hermes library object that applications link to. Very little code is here, as most implementation is executed in the runtime."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"codegen"})," contains python code to help with generating and maintaining hrun tasks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hermes_adapters"})," includes all code relating to the adapters, such as  POSIX, STDIO, and MPI-IO interception"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config"})," contains default configurations of Hermes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"docker"})," contains dockerfiles for building Hermes container."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"wrapper"})," contains all code for binding Hermes to other languages."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"external"})," contains git submodules of repos external to Hermes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"test"})," includes all unit tests"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"benchmark"})," includes some performance benchmark kernels"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ci"})," includes all code for continuous integration"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"preparing-pull-request-pr",children:"Preparing Pull Request (PR)"}),"\n",(0,s.jsx)(n.p,{children:"Please run these two steps and remove all warnings."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make dox\nmake lint\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pr-check-failure",children:"PR Check Failure"}),"\n",(0,s.jsxs)(n.p,{children:["We use the ",(0,s.jsx)(n.a,{href:"https://github.com/HDFGroup/hermes/blob/master/docker/deps.Dockerfile",children:"deps.Dockerfile"}),"\nto avoid reinstalling packages in the github action. While github has a cache action,\nwe find it somewhat cumbersome. This way, we get the benefit of both a maintained\ndockerfile and a fast github action."]}),"\n",(0,s.jsx)(n.h2,{id:"containerized-hermes",children:"Containerized Hermes"}),"\n",(0,s.jsx)(n.p,{children:"As a developer, it may be beneficial to use Hermes inside of a container to\navoid differences in machines."}),"\n",(0,s.jsx)(n.p,{children:"First, cd into your Hermes directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd /path/to/hermes\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then either build the container from scratch or pull (but not both):"}),"\n",(0,s.jsx)(n.p,{children:"From scratch:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker build -t lukemartinlogan/hermes_deps . -f docker/deps.Dockerfile\n"})}),"\n",(0,s.jsx)(n.p,{children:"Pull:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker pull lukemartinlogan/hermes_deps:latest\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then, run the container. This command will mount the Hermes directory\nas /hermes. It will make it so that the container has 4GB of memory and\n4GB of shared memory. By default, containers don't have shared memory, but\nHermes requires it. We then also forward ports 4000 and 4001 to support remote\ndebugging from those ports."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -it --mount src=${PWD},target=/hermes,type=bind \\\n--name hermes_deps_c \\\n--network host \\\n--memory=8G \\\n--shm-size=8G \\\n-p 4000:4000 \\\n-p 4001:4001 \\\nlukemartinlogan/hermes_deps\n"})}),"\n",(0,s.jsx)(n.p,{children:"To run the github action:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bash /hermes/ci/build_hermes.sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"Within the container, build Hermes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Load spack and other modules\n. /module_load.sh\n. "${SPACK_DIR}/share/spack/setup-env.sh"\n# Load hermes_shm\nspack load hermes_shm\n# Build hermes\ncd /hermes\nmkdir build\ncd build\ncmake ../\nmake -j8\n'})}),"\n",(0,s.jsx)(n.p,{children:"If you make changes to the dependencies container:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker commit hermes_deps_c lukemartinlogan/hermes_deps\ndocker push lukemartinlogan/hermes_deps\ndocker stop /hermes_deps_c\ndocker rm /hermes_deps_c\n"})}),"\n",(0,s.jsx)(n.h2,{id:"remote-debugging",children:"Remote Debugging"}),"\n",(0,s.jsx)(n.p,{children:"At some point, you may have to do a remote debug. The following code will\nforward SSH connections so that you can remotely connect a debugger."}),"\n",(0,s.jsxs)(n.p,{children:["Let's say that you are running Hermes on a machine ",(0,s.jsx)(n.a,{href:"mailto:myusername@myip.org",children:"myusername@myip.org"})," on\nport 4000. You can connect to that by forwarding a local port to that address.\nA debugger would connect to localhost:4000, which will then be routed to\n",(0,s.jsx)(n.a,{href:"mailto:myusername@myip.org",children:"myusername@myip.org"}),":4000."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"remote_machine_login=myusername@myip.org\n\nlocal_port=4000\nremote_port=4000\nssh -L ${local_port}:localhost:${remote_port} -fN ${ares_node}\n\nlocal_port=4001\nremote_port=4001\nssh -L ${local_port}:localhost:${remote_port} -fN ${ares_node}\n"})}),"\n",(0,s.jsx)(n.p,{children:"To shutdown this forwarding, you kill all routed SSH connections as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'pkill -f "ssh -L"\n'})}),"\n",(0,s.jsx)(n.p,{children:"If the machine you are running Hermes on has a head/login node, you\nwill have to forward the connection from your head node to the node actually\nrunning the code (the compute nodes). If this is the case, just repeat the\nabove steps on the head node, replacing remote_machine_login with the address\nof the compute node."}),"\n",(0,s.jsx)(n.h2,{id:"preparing-for-release",children:"Preparing For Release"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a GitHub Project for the ",(0,s.jsx)(n.em,{children:"next"})," release"]}),"\n",(0,s.jsxs)(n.li,{children:["Update the ",(0,s.jsx)(n.code,{children:"HERMES_VERSION_*"})," variables in ",(0,s.jsx)(n.code,{children:"CMakeLists.txt"})]}),"\n",(0,s.jsxs)(n.li,{children:["Update ",(0,s.jsx)(n.code,{children:"PROJECT_NUMBER"})," in ",(0,s.jsx)(n.code,{children:"Doxyfile.in"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"To make release note generation as automated as possible, make sure\nrelevant pull requests that are part of the release have proper labels and and\ntitles, as that information will show up directly in the generated release\nnotes in the next step."}),"\n",(0,s.jsxs)(n.li,{children:["Draft a release on Github. Click ",(0,s.jsx)(n.code,{children:"auto-generate release notes"}),' and edit\nthe result as necessary. Fill in the new tag, and select "Create new tag x.x.x\non publish" so that Github will automatically tag the release when it is\npublished.']}),"\n",(0,s.jsx)(n.li,{children:"The docker containers will be automatically built and pushed to docker hub\nwhenever a new tag is added. Check the CI actions to make sure there were no\nerrors."}),"\n",(0,s.jsx)(n.li,{children:"Copy/move ideas to the project for the next release"}),"\n",(0,s.jsxs)(n.li,{children:["Close and archive the project for the ",(0,s.jsx)(n.em,{children:"current"})," release"]}),"\n",(0,s.jsxs)(n.li,{children:["Merge the latest release branch (if one exists) of the wiki into the ",(0,s.jsx)(n.code,{children:"master"})," branch."]}),"\n",(0,s.jsx)(n.li,{children:"Make an announcement in the Hermes topic of the HDF forum."}),"\n",(0,s.jsx)(n.li,{children:"Send Lori a note for the next HDF5 newsletter."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introduction-to-our-continuous-integration-ci",children:"Introduction to our Continuous Integration (CI)"}),"\n",(0,s.jsxs)(n.p,{children:["We are primarily using Python for managing for running unit tests. Under\n",(0,s.jsx)(n.a,{href:"https://github.com/HDFGroup/hermes/blob/master/CMakeLists.txt",children:"our root CMakeList"}),", we implement a\nCMake function called jarvis_test, which uses ",(0,s.jsx)(n.a,{href:"https://github.com/grc-iit/jarvis-cd.git",children:"Jarvis"}),"\nand its ",(0,s.jsx)(n.a,{href:"https://github.com/HDFGroup/hermes/tree/master/test/unit/pipelines",children:"pipelines"})," concept."]}),"\n",(0,s.jsx)(n.h2,{id:"adding-a-new-adapter",children:"Adding a New Adapter"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new directory under the ",(0,s.jsx)(n.code,{children:"adapter"})," directory."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var s=r(7294);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);