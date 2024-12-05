---
layout: post
title: Attention Bottlenecks for Multimodal Fusion
categories: paper
tags: [paper]
---

> 看到什么特别的东西就在这里随便记一下。

### Attention Bottlenecks for Multimodal Fusion

Code：https://github.com/google-research/scenic/tree/main/scenic/projects/mbt

[TOC]


<span style="color:red">文字、图片</span>
### 1. 摘要

#### 1.1. 背景-挑战

人们对世界的认知，对信息的处理是多模态的，而大多数机器学习模型仅针对单模态，所以将各模态的最终表示或预测仍然是主流范式，即先分别处理单个模态数据之后fusion为多模态结果。


#### 1.2. 提出新方法

本文提出一种基于transformer的多层fusion方法，借助于“fusion bottlenecks”。


#### 1.3. 方法描述

文让不同模态的信息穿过许多小的bottlenecks，迫使模型collate和share不同模态中最重要的信息。

#### 1.4. 实验结果

作者发现通过这种方式，模型的fusion性能更好，且计算消耗降低。本文做了完整的消融实验，在多个音视频分类基准数据集上取得了SOTA的性能，包括Audioset, Epic-Kitchens and VGGSound。





### 2. 引言

#### 2.1. 背景问题

人类感知学习的关键在于能够同时处理多种感官信息，然而，对于人工智能学习系统来说，<span style="color:red">设计一个能融合多种模态信息的统一模型是很困难的</span>，这主要有以下几个原因：

① <span style="color:blue">不同模态的学习动态不同</span>，就像每个人学习不同科目有快有慢一样，不同模态的数据学习起来的特点和速度也不一样。

② <span style="color:blue">噪声拓扑不同，有些模态的数据包含的任务相关信息更多，有些则较少。</span>

③ <span style="color:blue">输入表示不同，特别是音频和视觉之间的差异非常明显。</span> 许多最先进的音频分类方法依赖于短期傅立叶分析来生成对数梅尔频谱图，然后将它们输入CNN 网络中（这些CNN是专为图像处理设计的）。但是显然，音频的time-frequency表示和图像是有着完全不同的分布的。视频中视觉流一般是三个维度的（两个空间维度和一个时间维度），虽然图像不同空间的区域对应着不同的objects，但是跨帧的图像之间有很多冗余信息，这也是视频处理的一个独特挑战。因此，无论是输入数据的表示，还是神经网络的结构，对不同模态来说都是很不一样的。


#### 2.2. 方法

① <u>Transformer 作为一种通用的感知模型</u>：因为它有能力对标记之间的密集相关性进行建模，同时不需要对输入的具体内容有太多先验假设（而且连续的感知输入可以被标记化）。通过将密集的连续信号（比如图像、视频或音频）分割成小块（补丁），然后将这些小块转化为一维的标记，Transformer 在图像分类（如 ViT）、视频分类（如 ViViT）以及最近的音频分类（如 AST）等任务中表现出了很强的竞争力。

② <u>Transformer的扩展</u>：由于Transformer能够很好地处理可变长度的序列，所以很自然地，第一个扩展就是将视觉和听觉的补丁序列输入到 Transformer 中，并且对架构只需做最小的改变。这种 “早期融合” 模型允许图像中不同空间和时间区域之间以及音频频谱图中的频率和时间之间自由地进行注意力流动。

③ <u>问题</u>：<span style="color:blue">在模型的所有层都进行完全的成对注意力机制</span>，这并不是必需的。例如，在一个视频中，可能相邻的几帧图像非常相似，包含了大量重复的信息，如果在所有层都进行完全的成对注意力计算，会浪费很多计算资源，因为很多信息是冗余的，不需要重复关注。而对于一个很长的视频，如果不进行优化，随着视频长度的增加，计算量会呈二次方增长，导致模型难以处理。

④ <u>本文的方法</u>：

​		1)  第一种方式遵循多模态学习中的常见范式，即把跨模态的信息交流限制在网络的后期层，这样早期层就可以专门学习和提取单模态的模式，这种方式被称为 “中期融合”（如图 1 左中所示），引入跨模态交互的层被称为 “融合层”。而这种方式的两个极端版本是 “早期融合”（所有层都是跨模态的）和 “后期融合”（所有层都是单模态的），并且将这两个极端版本作为基线来进行比较。

​		2)  的第二个想法（也是主要贡献）是限制层内标记之间的跨模态注意力流。具体做法是允许模态内自由进行注意力流，但迫使模型在与其他模态共享信息之前，先整理和 “压缩” 每个模态的信息。核心思想是引入一小组潜在融合单元，形成一个 “注意力瓶颈”，层内的跨模态交互必须通过这个瓶颈。


#### 2.3. 贡献

① MBT通过紧密的融合“瓶颈”限制了潜在单元之间的跨模态信息流动，迫使模型在每个模态中收集和“凝聚”最相关的输入（因此只分享必要的信息与其他模态）。这避免了完整成对注意力的二次扩展成本，并以更少的计算实现了性能提升。

② 将 MBT 应用于图像和频谱图块（图2），并探讨了与融合层、输入采样和数据规模相关的多种消融。

③ 在多个流行的音视频基准（包括 AudioSet 、Epic-Kitchens100 和 VGGSound ）上设定了视频分类的新标准。在 Audioset 数据集上，性能超过了当前的最新水平，平均精度提升了5.9 mAP（相对提升12.7%）。





### 3. 多模态融合transformer

在3.1节中总结最近分别为图像和音频分类开发的视觉Transformer（ViT）[18]和音频频谱图Transformer（AST）[26]。然后，描述我们对视听融合情况的扩展。我们讨论三种不同的标记融合策略（3.2节），最后讨论整个模型中的融合路径（3.3节），这涉及将多模态融合限制在模型的某些层。

### 3.1. ViT和AST架构

① <u>ViT和AST来源</u>：它们改编自最初为自然语言处理设计的 Transformer 架构。

② <u>处理 2D 输入的方式</u>：

​		1)  从 RGB 图像（或音频频谱图）中提取$N$个不重叠的小块$x_{i} \in \mathbb{R}^{h ×w}$

​		2)  通过线性投影$E$将小块转换为 1D 标记$z_{i} \in \mathbb{R}^{d}$，并添加特殊标记$z_{cls}$和位置嵌入$p$，得到标记序列$z = g(x; E, z_{cls}) = [z_{cls}, Ex_{1}, Ex_{2},..., Ex_{N}] + p$ （1）。其中，$z_{cls}$是一个特殊标记，添加到序列开头，以便其在最后一层的表示可以传递给分类器进行分类任务；$p \in \mathbb{R}^{(N + 1)×d}$是一个学习到的位置嵌入，添加到标记中以保留位置信息（因为所有后续的自注意力操作都是排列不变的）。

③ <u>编码器结构/u>：transformer的tokens通过一个由L个Transformer层组成的编码器。每一个transformer层包含使用残差连接的多头自注意力模块 Multi-Headed Self-Attention (MSA), 层正则化模块 Layer Normalisation (LN) 和多层感知机模块 Multilayer Perceptron (MLP) 。将一个Transformer层表示为$z^{l + 1} = Transformer(z^{l})$，即$y^{l} = MSA(LN(z^{l})) + z^{l}$ （2），$z^{l + 1} = MLP(LN(y^{l})) + y^{l}$ （3）。
其中，MSA进行点积的注意力操作，其querys，keys 和 values 是同一个向量经过不同的线性映射得到的，可表示为$MSA(X) = Attention(W^{Q}X, W^{K}X, W^{V}X)$。本文还定义的在两个不同向量$X$、$Y$之间进行的cross-attention操作(用于多模态操作)，其中querys来自X，而keys和values来自Y，可以表示为：$MCA(X, Y) = Attention(W^{Q}X, W^{K}\dot{Y}, W^{V}Y)$



### 3.2. 多模态Transformer

#### 3.2.1 通过普通自注意力进行融合

将常规的 Transformer 直接应用于多模态输入，形成 “vanilla” 融合模型。对于给定的t秒视频片段，均匀采样 F 个 RGB 帧，并将音频波形转换为单个频谱图。然后，按照 ViT 中的编码方式，分别对每个帧和频谱图进行嵌入，然后将所有标记连接成一个单一序列。

形式上，从所有F个采样帧中总共提取了$N_{v}$个RGB小块$x_{rgb} \in \mathbb{R}^{N_{v}×d}$和$N_{a}$个频谱图小块$x_{spec} \in \mathbb{R}^{N_{a}×d}$，最终得到的**标记序列**表示是（将图像和频谱图的一个个patch视为一个个token）：$z = [z_{rgb} \| z_{spec}]$，其中$z_{rgb} = g(x_{rgb}; E_{rgb}, z_{cls - rgb})$且$z_{spec} = g(x_{spec}; E_{spec}, z_{cls - spec})$ （4）。这里，$\| $表示拼接操作。视觉和音频的映射矩阵$E_{rgb}$, $E_{spec}$是不同的，他们的类别标签$z_{cls-rgb}$,$z_{cls-spec}$也是每个模态特有的。

然后使用原始的transformer对上述**标记序列**进行处理：$z^{l + 1} = Transformer(z^{l}; \theta)$。该模型下，transformer中的self-attention模块能够自由地提取和处理来自不同模态的所有信息（视觉patches和音频patches）。



#### 3.2.2 使用模态特定参数进行融合

作者将3.2.1的模型改为每种模态各自训练自己的参数（即modality-specific），然后使用cross-attention来做信息交换。因此，作者定义了一个cross-transformer层：$z_{rgb}^{l + 1} = Cross - Transformer(z_{rgb}^{l}, z^{l}; \theta_{rgb})$ ，$z_{spec}^{l + 1} = Cross - Transformer(z_{spec}^{l}, z^{l}; \theta_{spec})（5）$

其中是的拼接（论文中没提，但是我感觉应该是拼接的结果）， corss-transformer的输入是不完全一样的两个输入（不同于原始transformer），它的过程与原始transformer的差距在于公式（2）变为下面的公式（6），用cross-attention替换了原始attention。当参数一样时，本节的方法和3.2.1就是一样的。
$y^{l} = MCA(LN(z_{1}^{l}), LN(z_{2}^{l})) + z_{1}^{l}$ （6）



#### 3.2.3 使用attention bottlenecks做fusion

为了控制成对注意力的二次复杂度，作者在transformer的输入sequence中引入一小组B个融合瓶颈标记$z_{fsn} = [z_{fsn}^{1}, z_{fsn}^{2},..., z_{fsn}^{B}]$（见图2）。那么，现在输入序列为$z = [z_{rgb} \parallel z_{fsn} \parallel z_{spec}]$

然后作者将跨模态的attention限制在这些bottlenecks内，对于层layer而言，计算过程变为：
$[z_{rgb/spec}^{l + 1} \parallel \hat{z}_{fsn_{i}}^{l + 1}] = Transformer([z_{rgb/spec}^{l} \parallel z_{fsn}^{l}]; \theta_{i})$（8），$z_{fsn}^{l + 1} = Avg_{i}(\hat{z}_{fsn_{i}}^{l + 1})$ （9）。

这里i索引每个模态(在这种情况下为RGB和Spec)，并且$z_{rgb}$和$z_{spec}$只能通过Transformer层内的瓶颈$Z_{fsn}$交换信息。我们首先创建特定于模态的临时瓶颈融合标记$\hat{z}_{fsn_{i}}$，它们与音频和视觉信息同时分别更新（公式8）。然后在公式9中对每个跨模态更新的最终融合标记进行平均。

 因此，视觉和音频的向量更新只能通过bottleneck tokens来进行，作者通过限制bottleneck tokens的数量远小于原始tokens的数量，来降低计算复杂度。并且通过较少的bottleneck传递跨模态信息时，模型迫使每个模态浓缩自己的信息，且仅传递最重要的信息给另一个模态（避免了模态中冗余信息的传递和计算）。该公式中，bottleneck tokens的向量更新了两次，先用visual信息更新一次（公式8），再用audio信息更新一次（公式9）。（问题：这样的话，模型两个模态的处理过程就成了串行的，先处理visual，再处理audio，会不会影响模型的计算速度呢？）后续实验证明，该模型在保持甚至超越其他模型性能的情况下，降低了计算量。
