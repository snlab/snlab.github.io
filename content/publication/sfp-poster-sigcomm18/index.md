+++
title = "SFP: Toward Interdomain Routing for SDN Networks (Poster)"
date = 2018-08-10T11:33:03+08:00
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Qiao Xiang", "Chin Guok", "Franck Le", "John MacAuley", "Harvey Newman", "Y. Richard Yang"]

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types = ["1"]

# Publication name and optional abbreviated version.
publication = "In Proceedings of *the Conference of the ACM Special Interest Group on Data Communication (SIGCOMM)*"
publication_short = "In *SIGCOMM*"

# Abstract and optional shortened version.
abstract = "Interdomain routing using BGP is widely deployed and well understood. The deployment of SDN in BGP domain networks, however, has not been systematically studied. In this paper, we first show that the use-announcement inconsistency is a fundamental mismatch in such a deployment, leading to serious issues including unnecessary blackholes, unnecessary reduced reachability, and permanent forwarding loops. We then design SFP, the first fine-grained interdomain routing protocol that extends BGP with fine-grained routing, eliminating the aforementioned mismatch. We develop two novel techniques, automatic receiver filtering and on-demand information dissemination, to address the scalability issue brought by fine-grained routing. Evaluating SFP using real network topologies and traces for intended settings, which are not global Internet but tens of collaborative domains, we show that SFP can reduce the amount of traffic affected by blackholes and loops by more than 50%, and that our proposed techniques can reduce the amount of signaling between ASes by 3 orders of magnitude compared with naive fine-grained routing."
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

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides = ""

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
url_poster = "http://dl.acm.org/citation.cfm?doid=3234200.3234207"
url_source = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
# links = [{name = "Custom Link", url = "http://example.org"}]

# Does this page contain LaTeX math? (true/false)
math = false

# Does this page require source code highlighting? (true/false)
highlight = true

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[image]
caption = ""
focal_point = ""
preview_only = false

+++
