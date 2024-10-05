"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[9700],{5967:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=n(5893),o=n(1151);const r={},t="SSH",a={id:"hpc-tutorials/linux-introduction/ssh",title:"SSH",description:"SSH is a secure way of connecting to a remote machine. SSH relies on public-private key cryptography to secure",source:"@site/docs/02-hpc-tutorials/01-linux-introduction/03-ssh.md",sourceDirName:"02-hpc-tutorials/01-linux-introduction",slug:"/hpc-tutorials/linux-introduction/ssh",permalink:"/docs/hpc-tutorials/linux-introduction/ssh",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basics of using a Terminal",permalink:"/docs/hpc-tutorials/linux-introduction/using-a-terminal"},next:{title:"Installing HPC Software",permalink:"/docs/category/installing-hpc-software"}},c={},h=[{value:"Creating the keys",id:"creating-the-keys",level:2},{value:"Ensuring permissions",id:"ensuring-permissions",level:2},{value:"How does <code>chmod</code> work?",id:"how-does-chmod-work",level:3},{value:"Key registration",id:"key-registration",level:2},{value:"Connecting to a machine",id:"connecting-to-a-machine",level:2}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"ssh",children:"SSH"})}),"\n",(0,i.jsx)(s.p,{children:"SSH is a secure way of connecting to a remote machine. SSH relies on public-private key cryptography to secure\nthe connection. The private key is a secret that only you should know. The public key should be given to other\npeople. Generally, RSA is used as the algorithm for generating keys. SSH is the backbone of most HPC machines.\nYou cannot access these machines without knowing how SSH works, so we introduce it here."}),"\n",(0,i.jsx)(s.p,{children:"The following guide will demonstrate how to setup SSH for connecting to an SSH server. This guide does NOT\ndiscuss how to spawn an SSH server."}),"\n",(0,i.jsx)(s.h2,{id:"creating-the-keys",children:"Creating the keys"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"SSH keys can be given passwords, but we recommend against."}),' We consider the SSH key itself to be secret enough\nthat a password is completely unnecessary. This is referred to as "passwordless-ssh". Passwordless-ssh is required\nfor many HPC programs.']}),"\n",(0,i.jsx)(s.p,{children:"To create a public/private key pair, run the following command:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh-keygen\n"})}),"\n",(0,i.jsx)(s.p,{children:"The default names for the keys are as follows:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:['The private key is "',(0,i.jsx)(s.code,{children:"~/.ssh/id_rsa"}),'"']}),"\n",(0,i.jsxs)(s.li,{children:['The public key is "',(0,i.jsx)(s.code,{children:"~/.ssh/id_rsa.pub"}),'"']}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"You can use other names (it doesn't have to be id_rsa), but we recommend against this in general. Many SSH-based\ntools become cumbersome with keys which are non-default."}),"\n",(0,i.jsx)(s.h2,{id:"ensuring-permissions",children:"Ensuring permissions"}),"\n",(0,i.jsx)(s.p,{children:"SSH is very particular about the permissions of the ~/.ssh directory and the files in that directory. Below describes\nthe permissions that need to be set to make SSH behave."}),"\n",(0,i.jsx)(s.p,{children:'For convenience, feel free to copy-paste this. A detailed description of what these do is under "How does chmod work?"'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo chmod 700 ${HOME}/.ssh\nsudo chmod 644 ${HOME}/.ssh/id_rsa.pub\nsudo chmod 600 ${HOME}/.ssh/id_rsa\nsudo chmod 600 ${HOME}/.ssh/authorized_keys\nsudo chmod 600 ${HOME}/.ssh/config\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"how-does-chmod-work",children:["How does ",(0,i.jsx)(s.code,{children:"chmod"})," work?"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"chmod"}),' stands for "change mode". It has the following syntax:']}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sudo chmod [mode] [path]\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'"mode" is a 3-digit code.'}),"\n",(0,i.jsx)(s.li,{children:"Each digit is between 0 and 7"}),"\n",(0,i.jsx)(s.li,{children:"The digits have the following meaning: [owner] [group] [user]"}),"\n",(0,i.jsx)(s.li,{children:"owner: typically you"}),"\n",(0,i.jsx)(s.li,{children:"group: files can be apart of a group. Only one group per file or directory."}),"\n",(0,i.jsx)(s.li,{children:"user: typically anyone other than you"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"A single digit can have the following values:"}),"\n",(0,i.jsxs)(s.ol,{start:"0",children:["\n",(0,i.jsx)(s.li,{children:"No permissions"}),"\n",(0,i.jsx)(s.li,{children:"Execute only"}),"\n",(0,i.jsx)(s.li,{children:"Write only"}),"\n",(0,i.jsx)(s.li,{children:"Write and execute (2 + 1 = 3)"}),"\n",(0,i.jsx)(s.li,{children:"Read only"}),"\n",(0,i.jsx)(s.li,{children:"Read and execute (4 + 1 = 5)"}),"\n",(0,i.jsx)(s.li,{children:"Read and write (4 + 2 = 6)"}),"\n",(0,i.jsx)(s.li,{children:"Read, write, and execute (4 + 2 + 1 = 7)"}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"# The SSH directory\n# Owner has read, write, execute permissions.\n# No one else can touch this directory.\nsudo chmod 700 ${HOME}/.ssh\n\n# The public key\n# Owner has read + write permissions.\n# Other users can read this file\nsudo chmod 644 ${HOME}/.ssh/id_rsa.pub\n\n# The private key\n# Owner has read + write permissions\n# Nobody else has permissions\nsudo chmod 600 ${HOME}/.ssh/id_rsa\n\n# Authorized keys\n# Owner has read + write permissions\n# Nobody else has permissions\nsudo chmod 600 ${HOME}/.ssh/authorized_keys\n\n# User Config\n# Owner has read + write permissions\n# Nobody else has permissions\nsudo chmod 600 ${HOME}/.ssh/config\n"})}),"\n",(0,i.jsx)(s.h2,{id:"key-registration",children:"Key registration"}),"\n",(0,i.jsxs)(s.p,{children:["Your key will then have to be registered with the SSH server. This is typically done using the ",(0,i.jsx)(s.code,{children:"ssh-copy-id"}),"."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh-copy-id -f -i ~/.ssh/id_rsa [USERNAME]@[IP]\n"})}),"\n",(0,i.jsx)(s.p,{children:"If the machine has a custom port number, the command's syntax is as follows:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh-copy-id -f -i ~/.ssh/id_rsa -p [PORT] [USERNAME]@[IP]\n"})}),"\n",(0,i.jsx)(s.h2,{id:"connecting-to-a-machine",children:"Connecting to a machine"}),"\n",(0,i.jsxs)(s.p,{children:['To connect to a machine, use the "',(0,i.jsx)(s.code,{children:"ssh"}),'" command. The command roughly has the following syntax:']}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh -p [PORT] -i [PRIVATE_KEY] [USERNAME]@[IP]\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"[PORT]: Default is 22."}),"\n",(0,i.jsx)(s.li,{children:"[PRIVATE_KEY]: Default is ~/id_rsa"}),"\n",(0,i.jsx)(s.li,{children:"[USERNAME]: Default is the current user"}),"\n",(0,i.jsx)(s.li,{children:"[IP]: The IP address or host name of the machine"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Generally, if everything is default (SSH key, port number), the command would look like:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"ssh [USERNAME]@[IP]\n"})})]})}function l(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>t});var i=n(7294);const o={},r=i.createContext(o);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);