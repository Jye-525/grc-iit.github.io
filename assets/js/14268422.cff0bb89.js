"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[8893],{9121:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var s=i(5893),r=i(1151);const a={},l="Deploying Hermes",t={id:"hermes/deploying-hermes",title:"Deploying Hermes",description:"Configuring + Deploying Hermes",source:"@site/docs/03-hermes/03-deploying-hermes.md",sourceDirName:"03-hermes",slug:"/hermes/deploying-hermes",permalink:"/docs/hermes/deploying-hermes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building Hermes",permalink:"/docs/hermes/building-hermes"},next:{title:"Configuration",permalink:"/docs/hermes/configuration"}},o={},c=[{value:"Configuring + Deploying Hermes",id:"configuring--deploying-hermes",level:2},{value:"Install Jarvis",id:"install-jarvis",level:3},{value:"Initialize Jarvis",id:"initialize-jarvis",level:3},{value:"Build a Resource Graph",id:"build-a-resource-graph",level:3},{value:"Bootstrapping from an existing machine",id:"bootstrapping-from-an-existing-machine",level:4},{value:"Building a new resource graph",id:"building-a-new-resource-graph",level:4},{value:"Building an Environment",id:"building-an-environment",level:3},{value:"Set the active Hostfile",id:"set-the-active-hostfile",level:3},{value:"Create an empty pipeline",id:"create-an-empty-pipeline",level:4},{value:"Copy the environment cache",id:"copy-the-environment-cache",level:4},{value:"Add Hermes runtime",id:"add-hermes-runtime",level:4},{value:"Starting + Stopping Hermes",id:"starting--stopping-hermes",level:3},{value:"Stopping and Killing Hermes",id:"stopping-and-killing-hermes",level:3},{value:"Cleanup",id:"cleanup",level:3},{value:"Configuring + Deploying Hermes with an Application",id:"configuring--deploying-hermes-with-an-application",level:2},{value:"Build an Environment",id:"build-an-environment",level:3},{value:"Create an empty pipeline",id:"create-an-empty-pipeline-1",level:3},{value:"Copy the environment cache",id:"copy-the-environment-cache-1",level:3},{value:"Set the active hostfile",id:"set-the-active-hostfile-1",level:3},{value:"Add Hermes runtime",id:"add-hermes-runtime-1",level:3},{value:"Add Hermes MPI-IO interceptor",id:"add-hermes-mpi-io-interceptor",level:3},{value:"Add IOR",id:"add-ior",level:3},{value:"Run the Pipeline",id:"run-the-pipeline",level:3},{value:"Cleanup",id:"cleanup-1",level:3},{value:"Why is my application hanging?",id:"why-is-my-application-hanging",level:2},{value:"Resource Graph Misconfiguration",id:"resource-graph-misconfiguration",level:3},{value:"Dependency Problems",id:"dependency-problems",level:3},{value:"Machine Misconfiguration",id:"machine-misconfiguration",level:3},{value:"Permissions Problems",id:"permissions-problems",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploying-hermes",children:"Deploying Hermes"}),"\n",(0,s.jsx)(n.h2,{id:"configuring--deploying-hermes",children:"Configuring + Deploying Hermes"}),"\n",(0,s.jsxs)(n.p,{children:["The Hermes daemon is responsible for tracking various metadata, and it is\nrequired to be launched before your application. There should only be\none Hermes daemon per node. We recommend\n",(0,s.jsx)(n.a,{href:"https://github.com/grc-iit/jarvis-cd.git",children:"Jarvis"})," for deploying Hermes.\nJarvis is a framework that configures and deploys complex applications and\nservices. Jarvis will automatically set various environment variables\nthat Hermes expects in order for applications to be deployed. We have\nalso integrated several applications into Jarvis that can be seamlessly\ndeployed with Hermes."]}),"\n",(0,s.jsx)(n.h3,{id:"install-jarvis",children:"Install Jarvis"}),"\n",(0,s.jsx)(n.p,{children:"To install jarvis, do the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export JARVIS_PATH=${PWD}/jarvis-cd\ngit clone https://github.com/grc-iit/jarvis-cd.git ${JARVIS_PATH}\ncd ${JARVIS_PATH}\npip install -e .\n"})}),"\n",(0,s.jsx)(n.h3,{id:"initialize-jarvis",children:"Initialize Jarvis"}),"\n",(0,s.jsxs)(n.p,{children:["After installing, Jarvis MUST be configured for your specific system. The first\nstep is to define places for storing Jarvis configuration data. Note that large data\nobjects are ",(0,s.jsx)(n.strong,{children:"never"})," intended to be stored in these directories."]}),"\n",(0,s.jsx)(n.p,{children:"There are three places where configuration data is stored:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CONFIG_DIR:"})," A directory where jarvis metadata for pkgs and pipelines are stored. This\ndirectory can be anywhere that the current user can access. ",(0,s.jsx)(n.code,{children:"${HOME}/jarvis_config"})," would be an example."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PRIVATE_DIR:"})," A directory which is common across all machines, but stores data locally to the\nmachine. Some jarvis pkgs require certain data to be stored per-machine. ",(0,s.jsx)(n.code,{children:"/tmp/jarvis_priv"})," would be an example."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SHARED_DIR:"})," A directory which is common across all machines, where each machine has the same\nview of data in the directory. In a supercomputing site, this would typically be\nin your home directory. For example ",(0,s.jsx)(n.code,{children:"${HOME}/jarvis_shared"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Make sure that all these paths are absolute paths. Environment variables can be used to make absolute paths less cumbersome. This command will automatically create the directories if they don't exist."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis init [CONFIG_DIR] [PRIVATE_DIR] [SHARED_DIR]\n"})}),"\n",(0,s.jsx)(n.p,{children:"This above command produces the jarvis configuration and store it here:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"${JARVIS_PATH}/config/jarvis_config.yaml\n"})}),"\n",(0,s.jsx)(n.h3,{id:"build-a-resource-graph",children:"Build a Resource Graph"}),"\n",(0,s.jsx)(n.p,{children:"A resource graph contains the storage and networking configuration\nof the machines you intend to deploy Hermes on."}),"\n",(0,s.jsx)(n.h4,{id:"bootstrapping-from-an-existing-machine",children:"Bootstrapping from an existing machine"}),"\n",(0,s.jsxs)(n.p,{children:["We have several resource graphs for different machines, located under\n",(0,s.jsx)(n.code,{children:"${JARVIS_PATH}/builtin/resource_graph"}),". There are resource graphs\nfor different machines spanning IIT, PNNL, and Argonne. To view the\nset of preconfigured machines, run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ls ${JARVIS_PATH}/builtin/resource_graph\n"})}),"\n",(0,s.jsx)(n.p,{children:"If one of your machines is there, then do:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis bootstrap from [MY_MACHINE]\n"})}),"\n",(0,s.jsx)(n.p,{children:"For example, ares is one of the machines:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis bootstrap from ares\n"})}),"\n",(0,s.jsx)(n.h4,{id:"building-a-new-resource-graph",children:"Building a new resource graph"}),"\n",(0,s.jsx)(n.p,{children:"If a resource graph for your machine is not available, you will have to\ndefine one manually."}),"\n",(0,s.jsxs)(n.p,{children:["The resource graph ",(0,s.jsx)(n.strong,{children:"must"})," be created at exactly the following path:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"${JARVIS_PATH}/config/resource_graph.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"For storage devices, the required parameters are as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"fs:\n  - avail: 500G # Available capacity of the device (Suffix: K,G,T,P)\n    dev_type: ssd # Type of storage hardware (hdd, ssd, nvme, pmem)\n    mount: /mnt/ssd/${USER} # Where to place data on the device\n    shared: false # Is this shared across nodes (e.g., a PFS?)\n"})}),"\n",(0,s.jsx)(n.p,{children:"For networks, the parameters are as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"net:\n  - domain: lo # Domain of network. Can be null.\n    fabric: 127.0.0.1/32\n    provider: tcp;ofi_rxm\n    shared: false # Is this network shared across nodes. E.g., localhost is not\n    speed: 40G\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This information can be discovered using tools such as ",(0,s.jsx)(n.code,{children:"fi_info"})," provided by libfabric. The fi_info tool is extremely verbose and requires some expertise to understand. fi_info outputs several networks -- most of which are irrelevant. Many networks printed may only function in single-node cases -- or not at all."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The most important information to determine a relevant network is domain, fabric, and provider."}),"\n",(0,s.jsxs)(n.li,{children:["Networks with the ",(0,s.jsx)(n.strong,{children:"lo"})," domain or with fabrics equivalent to 127.0.0.1 will only function in single-node cases."]}),"\n",(0,s.jsxs)(n.li,{children:["Fabrics ending with the format *.0.0.0 will ",(0,s.jsx)(n.strong,{children:"NOT"})," work. These are ",(0,s.jsx)(n.em,{children:"network"})," addresses, not ",(0,s.jsx)(n.em,{children:"host"})," addreses. For example, 127.0.0.0 comes up sometimes in the fi_info output."]}),"\n",(0,s.jsx)(n.li,{children:"Networks where the fabric is not a number are generally irrelevant and will not function when used. For example:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"# This provider is not relevant\nprovider: UDP\nfabric: UDP-IP\ndomain: udp\nversion: 1.1\ntype: FI_EP_DGRAM\nprotocol: FI_PROTO_UDP\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["One way to filter out dysfunctional fi_info outputs is to use ",(0,s.jsx)(n.code,{children:"ip addr show"})," (or ",(0,s.jsx)(n.code,{children:"fi_info | grep fabric"}),") to list available IP addresses. Do this on two separate machines, compare their output, and then look at only the IP addresses that are similar between the machines. If you can ssh between the machines using these IP addresses, then you should focus on only those fabrics matching their pattern in the fi_info output"]}),"\n",(0,s.jsx)(n.li,{children:"Be careful about the providers. It has come up plenty of times where a provider is listed, but doesn't actually work. Verbs, for example, may fail if your Hermes installation was not correctly configured to support RDMA. This is a guess-and-check game. TCP and Sockets are generally a safe bet. It may be of benefit to try just these providers and get a distributed deployment of Hermes functioning before moving on to verbs."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"building-an-environment",children:"Building an Environment"}),"\n",(0,s.jsx)(n.p,{children:"We will now load all necessary environment variables and build a\nJarvis environment named hermes_env:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"spack load hermes\njarvis env build hermes_env\n"})}),"\n",(0,s.jsx)(n.p,{children:"hermes_env will store all important environment variables, including PATH,\nLD_LIBRARY_PATH, etc. in a YAML file. This will make it so that you do not\nneed to repeatedly run spack load and module load if the machine is broken."}),"\n",(0,s.jsx)(n.h3,{id:"set-the-active-hostfile",children:"Set the active Hostfile"}),"\n",(0,s.jsx)(n.p,{children:"The hostfile contains the set of nodes that the pipeline will run over.\nThis is structured the same way as a traditional MPI hostfile."}),"\n",(0,s.jsx)(n.p,{children:"An example hostfile:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"ares-comp-20\nares-comp-[21-25]\n"})}),"\n",(0,s.jsx)(n.p,{children:"To set the active hostfile, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis hostfile set /path/to/hostfile\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note that every time you change the hostfile, you will need to update the\npipeline. Jarvis does not automatically detect changes to this file."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline update\n"})}),"\n",(0,s.jsx)(n.h4,{id:"create-an-empty-pipeline",children:"Create an empty pipeline"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline create hermes\n"})}),"\n",(0,s.jsx)(n.p,{children:"hermes is the name of the pipeline. It doesn't need to be hermes,\nit can be any name."}),"\n",(0,s.jsx)(n.h4,{id:"copy-the-environment-cache",children:"Copy the environment cache"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline env copy hermes_env\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will use the hermes_env environment that was previously created in"}),"\n",(0,s.jsx)(n.h4,{id:"add-hermes-runtime",children:"Add Hermes runtime"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline append hermes_run\njarvis pkg configure hermes_run \\\nsleep=5 \\\ninclude=${HOME}/ior_data\n"})}),"\n",(0,s.jsx)(n.p,{children:"Jarvis will automatically produce a Hermes client and server configuration that\ncontains all storage devices and fastest available network defined in the\nresource graph. These configurations will be located in:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$(jarvis path +shared)/hermes_run/hermes_server.yaml\n$(jarvis path +shared)/hermes_run/hermes_client.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"To view all parameters of the Hermes package, you can run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pkg help hermes_run\n"})}),"\n",(0,s.jsx)(n.h3,{id:"starting--stopping-hermes",children:"Starting + Stopping Hermes"}),"\n",(0,s.jsx)(n.p,{children:"To start Hermes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline start\n"})}),"\n",(0,s.jsx)(n.h3,{id:"stopping-and-killing-hermes",children:"Stopping and Killing Hermes"}),"\n",(0,s.jsx)(n.p,{children:"To gracefully stop Hermes and flush data back to the PFS:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline stop\n"})}),"\n",(0,s.jsx)(n.p,{children:"To kill a Hermes deployment that isn't stopping gracefully:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline kill\n"})}),"\n",(0,s.jsx)(n.h3,{id:"cleanup",children:"Cleanup"}),"\n",(0,s.jsx)(n.p,{children:"To erase data produced by the pipeline:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline clean\n"})}),"\n",(0,s.jsx)(n.p,{children:"To destroy the pipeline:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline destroy\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuring--deploying-hermes-with-an-application",children:"Configuring + Deploying Hermes with an Application"}),"\n",(0,s.jsx)(n.p,{children:"As previously stated, Jarvis can be used to deploy and application\nwith Hermes. This will automatically set environment variables\n(e.g., LD_PRELOAD) that will be necessary for the application to\nrun."}),"\n",(0,s.jsx)(n.h3,{id:"build-an-environment",children:"Build an Environment"}),"\n",(0,s.jsx)(n.p,{children:"We will now load all necessary environment variables and build a\nJarvis environment named hermes_env:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"spack load hermes\nspack load ior\njarvis env build hermes_ior_env\n"})}),"\n",(0,s.jsx)(n.p,{children:"hermes_ior_env will store all important environment variables, including PATH,\nLD_LIBRARY_PATH, etc. in a YAML file."}),"\n",(0,s.jsx)(n.h3,{id:"create-an-empty-pipeline-1",children:"Create an empty pipeline"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline create hermes_ior\n"})}),"\n",(0,s.jsx)(n.h3,{id:"copy-the-environment-cache-1",children:"Copy the environment cache"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline env copy hermes_ior_env\n"})}),"\n",(0,s.jsx)(n.h3,{id:"set-the-active-hostfile-1",children:"Set the active hostfile"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis hostfile set /path/to/hostfile\n"})}),"\n",(0,s.jsx)(n.h3,{id:"add-hermes-runtime-1",children:"Add Hermes runtime"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline append hermes_run\njarvis pkg configure hermes_run \\\nsleep=5 \\\ninclude=${HOME}/ior_data\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will ensure that if a Hermes interceptor is used, it will intercept\nall paths in ",(0,s.jsx)(n.code,{children:"${HOME}/ior_data"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"add-hermes-mpi-io-interceptor",children:"Add Hermes MPI-IO interceptor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline append hermes_api\njarvis pkg configure hermes_api +mpi\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will automatically locate the interceptor library by\ntraversing various environment variables. This will ensure\nthat MPI-IO is intercepted by Hermes."}),"\n",(0,s.jsx)(n.p,{children:"hermes_api includes other interceptors that can be used: posix, stdio, vfd. To view the set of options:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pkg help hermes_run\n"})}),"\n",(0,s.jsx)(n.h3,{id:"add-ior",children:"Add IOR"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline append ior\njarvis pkg configure ior \\\nxfer=1m \\\nblock=1g \\\nnprocs=64 \\\nppn=16 \\\n+write +read \\\nout=${HOME}/ior_data/ior.bin \\\napi=mpiio\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This IOR will perform 1GB of I/O per-process (block) in units of 1m (xfer) and\nproduce a single output file ",(0,s.jsx)(n.code,{children:"${HOME}/ior_data/ior.bin"}),"(out) using MPI-IO\n(api). The total amount of I/O performed will be 64GB spread across 4 nodes."]}),"\n",(0,s.jsx)(n.h3,{id:"run-the-pipeline",children:"Run the Pipeline"}),"\n",(0,s.jsx)(n.p,{children:"To run the pipeline:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline run\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will launch Hermes, execute IOR, and then stop Hermes. It is equivalent\nto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline start\njarvis pipeline stop\n"})}),"\n",(0,s.jsx)(n.h3,{id:"cleanup-1",children:"Cleanup"}),"\n",(0,s.jsx)(n.p,{children:"The following will delete intermediate data generated by Hermes + IOR:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"jarvis pipeline clean\n"})}),"\n",(0,s.jsx)(n.h2,{id:"why-is-my-application-hanging",children:"Why is my application hanging?"}),"\n",(0,s.jsx)(n.h3,{id:"resource-graph-misconfiguration",children:"Resource Graph Misconfiguration"}),"\n",(0,s.jsxs)(n.p,{children:["Commonly, the cause is a misconfiguration in the resource graph, specifically\nwith the network section. If the resource graph is misconfigured, Hermes may\ncrash with a ",(0,s.jsx)(n.code,{children:"mercury->fatal"})," error and ultimately cause the program to stall\nforever. Make sure that the domain, provider, and fabric are valid. To view the\nHermes configuration to see which network was selected from your resource graph,\nyou can run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat $(jarvis path)/hermes_run/hermes_server.yaml\n"})}),"\n",(0,s.jsx)(n.h3,{id:"dependency-problems",children:"Dependency Problems"}),"\n",(0,s.jsx)(n.p,{children:"If you are using the MPI-IO interceptor, make sure that the MPI that Hermes\ncompiled with is equivalent to the one your application was compiled with.\nYou may have multiple versions of MPI installed and if you didn't specify\nwhich one when installing Hermes and your program -- they may be different."}),"\n",(0,s.jsx)(n.p,{children:"If you are using the VFD, make sure the VFD was compiled with the same HDF5\nas the application."}),"\n",(0,s.jsx)(n.p,{children:"To view the dependencies of your installed Hermes, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"spack find -c -d hermes\n"})}),"\n",(0,s.jsx)(n.h3,{id:"machine-misconfiguration",children:"Machine Misconfiguration"}),"\n",(0,s.jsx)(n.p,{children:"We have found certain instances where using semantic hostnames in the hostfile\nhas resulted in incorrect behavior. If the machine is misconfigured, it is\npossible that a hostname maps to a different network domain on different nodes.\nTo verify this, you can try using exact IP addresses in your hostfile."}),"\n",(0,s.jsxs)(n.p,{children:["To view your machine's IP addresses, you can run\n",(0,s.jsx)(n.code,{children:"ip addr show"})," or ",(0,s.jsx)(n.code,{children:"fi_info | grep fabric"})]}),"\n",(0,s.jsx)(n.h3,{id:"permissions-problems",children:"Permissions Problems"}),"\n",(0,s.jsx)(n.p,{children:"If you cannot SSH between machines or if your known_hosts file is outdated,\nit is possible that Hermes will fail to launch due to permissions problems\non the network. Make sure that you can SSH between machines without error."})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>l});var s=i(7294);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);