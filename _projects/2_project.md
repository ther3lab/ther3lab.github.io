---
layout: page
title: stochastic regulatory systems
description:
img: assets/img/stoch-grn.png
importance: 2
category: work
giscus_comments: false
---

Regulatory systems exist partly to survive randomness. Bacteria switch their whole protein repertoire depending on which sugar they're grown in; heat-shocked cells activate survival pathways; and even in a stable environment, gene expression is noisy at every level—genes, mRNAs, proteins. Cells have clearly evolved to handle this, but exactly how regulatory systems evolve to deal with noise is still poorly understood.

Building on past work—recognized with the Reinhart-Heinrich Award in 2022—we've found that gene regulatory networks can still hit optimal phenotypes even under extreme environmental noise, and that robustness to environmental noise necessitates robustness to mutation too. Next, we want to pin down the explicit tradeoffs between evolvability and robustness under a shifting fitness landscape.

We're also challenging the standard steady-state picture of regulation. Treating biology as genuinely time-dependent and transient—rather than assuming it settles into equilibrium—reveals behavior that steady-state models miss entirely, and these transients can last far longer than the word "transient" suggests—all of biology is, in a sense, fundamentally transient. We've already found phase transitions in behavior driven purely by the interplay of time-dependent kinetics and noise, and want to understand how general that is.

A few open questions we're chasing:
- Can GRNs stay optimal under extreme noise, and does that require mutational stability too?
- What's the tradeoff between evolvability and robustness under a shifting fitness seascape?
- What can genuinely transient, non-steady-state dynamics do that steady-state models can't?

<div class="row justify-content-center">
    <div class="col-sm-6 mt-3 mt-md-0 text-center">
        {% include figure.liquid loading="eager" path="assets/img/stoch-grn.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Research from the $R^3$ Lab on stochasticity and transience in regulatory function:
- **Holehouse, J.** (2026). [Quantifying Broken Detailed Balance in Transcription.](https://www.nature.com/articles/s44260-025-00064-w) npj Complexity.
- **Holehouse, J.** (2026). [Do Distinct Subpopulations Signify Modes of Behaviour in a Noisy Single Cell?](https://royalsocietypublishing.org/rspb/article/293/2070/20260134/481567) Proceedings of the Royal Society B.
- Öcal, K., Sukys, A., Kumar, A., & **Holehouse, J.** (2026). [The Origins of Transient Bimodality.](https://arxiv.org/abs/2607.16531) arXiv:2607.16531. Under review at Journal of the Royal Society Interface.
- **Holehouse, J.**, & Redner, S. (2024). [First Passage on Disordered Intervals.](https://journals.aps.org/pre/abstract/10.1103/PhysRevE.109.L032102) Physical Review E.
- **Holehouse, J.**, Sukys, A., & Grima, R. (2020). [Stochastic Time-Dependent Enzyme Kinetics: Closed-Form Solution and Transient Bimodality.](https://pubs.aip.org/aip/jcp/article-abstract/153/16/164113/200374) The Journal of Chemical Physics.
- **Holehouse, J.**, & Moran, J. (2022). [Exact Time-Dependent Dynamics of Discrete Binary Choice Models.](https://iopscience.iop.org/article/10.1088/2632-072X/ac8c78/meta) Journal of Physics: Complexity.
- **Holehouse, J.**, Cao, Z., & Grima, R. (2020). [Stochastic Modeling of Autoregulatory Genetic Feedback Loops: A Review and Comparative Study.](https://www.cell.com/biophysj/fulltext/S0006-3495(20)30165-X) Biophysical Journal.
- Braichenko\*, S., **Holehouse\*, J.**, & Grima, R. (2021). [Distinguishing Between Models of Mammalian Gene Expression: Telegraph-Like Models versus Mechanistic Models.](https://royalsocietypublishing.org/doi/full/10.1098/rsif.2021.0510) Journal of the Royal Society Interface.
- Dzib, L. I. E., & **Holehouse, J.** (2026). [How is gene-regulatory evolution affected by cell-to-cell variability?](https://arxiv.org/pdf/2604.26082) arXiv:2604.26082. In revision at Evolution.
- Pandya, A., & **Holehouse, J.** (2026). Transcriptional noise can tune the correlations between stages in the mRNA lifetime. Working paper.
