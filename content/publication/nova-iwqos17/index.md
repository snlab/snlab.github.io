+++
title = "NOVA: Towards on-demand equivalent network view abstraction for network optimization"
date = 2017-07-14T11:09:34+08:00
draft = false
doi = "10.1109/IWQoS.2017.7969117"

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Kai Gao", "Qiao Xiang", "Xin Wang", "Y. Richard Yang", "Jun Bi"]

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types = ["1"]

# Publication name and optional abbreviated version.
publication = "In *International Symposium on Quality of Service (IWQoS)*, IEEE/ACM"
publication_short = "In *IWQoS*"

# Abstract and optional shortened version.
abstract = "As many applications today migrate to distributed computing and cloud platforms, their user experience depends heavily on network performance. Software Defined Networking (SDN) makes it possible to obtain a global view of the network, introducing the new paradigm of developing adaptive applications with network views. A naive approach of realizing the paradigm, such as distributing the whole network view to applications, is not practical due to scalability and privacy concerns. Existing approaches providing network abstractions are limited to special cases, such as bottlenecks exist only at networks edges, resulting in potentially suboptimal or infeasible decisions. In this paper, we introduce a novel, on-demand network abstraction service that provides an abstract network view supporting not only accurate end-to-end QoS metrics, which satisfy the requirements of many peer-to-peer applications, but also multi-flow correlation, which is essential for bandwidth-sensitive applications containing many flows to conduct global network optimization. We prove that our abstract view is equivalent to the original network view, in the sense that applications can make the same optimal decision as with the complete information. Our evaluations demonstrate that the abstraction guarantees feasibility and optimality for network optimizations and protects the network service providers' privacy. Our evaluations also show that the service can be implemented efficiently; for example, for an extreme large network with 30,000 links and abstraction requests containing 3,000 flows, an abstract network view can be computed in less than one second."
abstract_short = ""

# Featured image thumbnail (optional)
image_preview = ""

# Is this a featured publication? (true/false)
featured = false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects = []

# Tags (optional).
#   Set `tags = []` for no tags, or use the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []

# Links (optional).
url_pdf = ""
url_code = "https://github.com/openalto/alto-nova"
url_dataset = ""
url_project = ""
url_slides = ""
url_video = ""
url_poster = ""
url_source = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
# links = [{name = "Custom Link", url = "http://example.org"}]
# links = [{name = "ieeexplore", url = "http://ieeexplore.ieee.org/document/7969117/"}]

# Does this page contain LaTeX math? (true/false)
math = false

# Does this page require source code highlighting? (true/false)
highlight = true

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides = ""

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[image]
caption = ""
focal_point = ""
preview_only = false

+++
