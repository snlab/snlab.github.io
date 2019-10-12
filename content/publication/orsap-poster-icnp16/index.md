+++
title = "ORSAP: Abstracting routing state on demand (Poster)"
date = 2016-11-08T11:01:47+08:00
draft = false
doi = "10.1109/IWQoS.2017.7969117"

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Kai Gao", "Chen Gu", "Qiao Xiang", "Xin Wang", "Y. Richard Yang", "Jun Bi"]

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types = ["1"]

# Publication name and optional abbreviated version.
publication = "In *International Conference on Network Protocols (ICNP)*, IEEE"
publication_short = "In *ICNP*"

# Abstract and optional shortened version.
abstract = "Providing an interface for network applications to access network state, Software-Defined Networking (SDN) northbound API protocol is the foundation for the development of programmable networks with adaptive applications. However, with the growing network scale and applications' need for routing state at multi-domain level, feeding complete routing states to applications would jeopardize their scalability and network providers' privacy. Thus a good routing state abstraction is needed, which must be on-demand so that different applications can receive customized abstract state suiting their needs. Moreover, it must be minimal and equivalent, i.e., containing all the necessary information for applications to make decisions as the complete state does with no redundancy. Current routing state abstractions are not on-demand, and adopt extreme aggregation approaches (e.g., the big switch) to provide a minimal abstraction with the price of severe information loss. For instance, bottleneck links shared between flows are concealed, leading applications to make sub-optimal decisions. In this paper, we design ORSAP, the first on-demand routing state abstraction protocol, through which network applications can describe their demands while Internet service providers can provide the on-demand minimal equivalent routing state accordingly. ORSAP ensures applications' scalability, protects network providers' privacy, and significantly reduces the traffic to disseminate the information. Experiments show that with ORSAP and the abstraction engine we introduced in this paper, one can achieve a state abstraction ratio of up to 60% with an extremely low computation time even with large networks and complex application queries."
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
url_code = ""
url_dataset = ""
url_project = ""
url_slides = ""
url_video = ""
url_poster = "http://ieeexplore.ieee.org/document/7784454/"
url_source = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
# links = [{name = "Custom Link", url = "http://example.org"}]

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
