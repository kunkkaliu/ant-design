(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{3247:function(a,b){a.exports={content:["article",["p","The following is a set of guidelines for contributing to Ant Design. Please spend several minutes reading these guidelines before you create an issue or pull request."],["h2","Code of Conduct"],["p","We have adopted a ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/CODE_OF_CONDUCT.md"},"Code of Conduct"]," that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated."],["h2","Open Development"],["p","All work on Ant Design happens directly on ",["a",{title:null,href:"https://github.com/ant-design"},"GitHub"],". Both core team members and external contributors send pull requests which go through the same review process."],["h2","Branch Organization"],["p","According to our ",["a",{title:null,href:"changelog#Release-Schedule"},"release schedule"],", we maintain two branches, ",["code","master"]," and ",["code","feature"],". If you send a bugfix pull request, please do it against the ",["code","master"]," branch, if it's a feature pull request, please do it against the ",["code","feature"]," branch."],["h2","Bugs"],["p","We are using ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues"},"GitHub Issues"]," for bug tracking. The best way to get your bug fixed is using our ",["a",{title:null,href:"http://new-issue.ant.design"},"issue helper"]," and provide reproduction steps with this ",["a",{title:null,href:"https://u.ant.design/codesandbox-repro"},"template"],"."],["p","Before you report a bug, please make sure you've searched existing issues, and read our ",["a",{title:null,href:"/docs/react/faq"},"FAQ"],"."],["h2","Proposing a Change"],["p","If you intend to change the public API or introduce new feature, we also recommend you use our ",["a",{title:null,href:"http://new-issue.ant.design"},"issue helper"]," to create a feature request issue."],["p","If you want to help on new API, please reference ",["a",{title:null,href:"https://github.com/ant-design/ant-design/wiki/API-Naming-rules"},"API Naming Rules"]," to name it."],["h2","Your First Pull Request"],["p","Working on your first Pull Request? You can learn how from this free video series:"],["p",["a",{title:null,href:"https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github"},"How to Contribute to an Open Source Project on GitHub"]],["p","To help you get your feet wet and get you familiar with our contribution process, we have a list of ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"good first issues"]," that contain bugs or small features that have a relatively limited scope. This is a great place to get started."],["p","If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don't accidentally duplicate your effort."],["p","If somebody claims an issue but doesn't follow up for more than two weeks, it's fine to take over it but you should still leave a comment."],["h2","Sending a Pull Request"],["p","The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation."],["p",["strong","Before submitting a pull request"],", please make sure the following is done:"],["ol",["li",["p","Fork the repository and create your branch from the ",["a",{title:null,href:"#Branch-Organization"},"correct branch"],"."]],["li",["p","Run ",["code","npm install"]," in the repository root."]],["li",["p","If you've fixed a bug or added code that should be tested, add tests!"]],["li",["p","Ensure the test suite passes (npm run test). Tip: ",["code","npm test -- --watch TestName"]," is helpful in development."]],["li",["p","Run ",["code","npm test -- -u"]," to update the ",["a",{title:null,href:"http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest"},"jest snapshots"]," and commit these changes as well (if there are any updates)."]],["li",["p","Ensure the UI change passes ",["code","npm run test-image"],"，Run ",["code","npm run test-image -- -u"]," to update UI snapshots and commit these changes as well (if there are any updates), ",["strong","UI test base on ",["a",{title:null,href:"https://docs.docker.com/get-docker/"},"Docker"],", need download the corresponding installation according to the platform"]]],["li",["p","Make sure your code lints (npm run lint). Tip: Lint runs automatically when you ",["code","git commit"]," (Use ",["a",{title:null,href:"https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks"},"Git Hooks"],")."]]],["p","Sending a Pull Request to ",["a",{title:null,href:"https://github.com/react-component/"},"react-component"],":"],["p","Since antd's components are based on react-component, sometimes you may need to send pull request to the corresponding react-component repository. If it's a bugfix pull request, after it's merged, the core team will release a patch release for that component as soon as possible, then you only need to reinstall antd in your project to get the latest patch release. If it's a feature pull request, after it's merged, the core team will release a minor release, then you need raise another pull request to ",["a",{title:null,href:"https://github.com/ant-design/ant-design/"},"Ant Design"]," to update dependencies, document and TypeScript interfaces (if needed)."],["h2","Development Workflow"],["p","After cloning antd, run ",["code","npm install"]," to fetch its dependencies. Then, you can run several commands:"],["ol",["li",["p",["code","npm start"]," runs Ant Design website locally."]],["li",["p",["code","npm run lint"]," checks the code style."]],["li",["p",["code","npm test"]," runs the complete test suite."]],["li",["p",["code","npm run compile"]," compiles TypeScript code to the ",["code","lib"]," and ",["code","es"]," directory."]],["li",["p",["code","npm run dist"]," creates UMD build of antd."]]],["h2","Being a collaborator"],["p","If you are a active contributor and are willing to work with Ant Design Team in our opensource workflow, you can ",["a",{title:null,href:"https://github.com/ant-design/ant-design/wiki/Collaborators#how-to-apply-for-being-a-collaborator"},"apply to be a outside collaborator"],"."]],meta:{order:12,title:"Contributing",toc:!1,filename:"docs/react/contributing.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Code-of-Conduct",title:"Code of Conduct"},"Code of Conduct"]],["li",["a",{className:"bisheng-toc-h2",href:"#Open-Development",title:"Open Development"},"Open Development"]],["li",["a",{className:"bisheng-toc-h2",href:"#Branch-Organization",title:"Branch Organization"},"Branch Organization"]],["li",["a",{className:"bisheng-toc-h2",href:"#Bugs",title:"Bugs"},"Bugs"]],["li",["a",{className:"bisheng-toc-h2",href:"#Proposing-a-Change",title:"Proposing a Change"},"Proposing a Change"]],["li",["a",{className:"bisheng-toc-h2",href:"#Your-First-Pull-Request",title:"Your First Pull Request"},"Your First Pull Request"]],["li",["a",{className:"bisheng-toc-h2",href:"#Sending-a-Pull-Request",title:"Sending a Pull Request"},"Sending a Pull Request"]],["li",["a",{className:"bisheng-toc-h2",href:"#Development-Workflow",title:"Development Workflow"},"Development Workflow"]],["li",["a",{className:"bisheng-toc-h2",href:"#Being-a-collaborator",title:"Being a collaborator"},"Being a collaborator"]]]}}}]);