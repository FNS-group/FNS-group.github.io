---
layout: post
title: UW-CycleGAN：Model-Driven CycleGAN for Underwater Image Restoration
categories: 水下图像修复
description: Sheng Lei
tags: [水下图像修复]
---

### UW-CycleGAN：Model-Driven CycleGAN for Underwater Image Restoration


大家好，本周给大家分享的论文是来自IEEE Transactions on Geoscience and Remote Sensing的“UW-CycleGAN：Model-Driven CycleGAN for Underwater Image Restoration”。

 

这篇论文提出一种简单而有效的模型驱动 CycleGAN 模型，用于水下图像修复

 

论文地址：https://ieeexplore.ieee.org/abstract/document/10251985

  

#### 01 Background

海洋勘探和观测的快速发展使得水下图像的修复和增强对于海洋资源的广泛利用至关重要。例如，水下自主导航任务需要基于高质量水下图像的实时物体识别和检测。然而，水下成像经历了一个复杂的过程，导致图像质量下降问题，例如颜色失真、细节模糊和低对比度。因此，水下图像的修复仍然是一个具有挑战性和艰巨的问题。


![to-ast](/images/posts/shenglei/01/01.png)

 

 

#### 02 Motivation

目前也有一些基于GAN的方法去解决这个问题，比如waterGAN、FUnIE-GAN等。但是，大多数基于 GAN 的方法都是数据驱动的，将水下图像与干净的图像连接起来，这缺乏可解释性。而模型驱动的深度学习方法以其良好的可解释性和泛化能力而闻名，于是作者提出了一种模型驱动 CycleGAN 模型，即UW-CycleGAN。而且大多数模型都忽略了真实水下环境的物理特性，导致处理真实水下图像的能力不足。为了解开复杂的退化，作者将水下图像分解为干净图像、背景光、透射图、场景深度和衰减系数的组合。


水下相机接收到的图像信号主要由直接信号和反向散射信号的两个分量组成


直接信号：是水下物体直接反射到相机的光线，包含场景信息


后向散射信号：是光线在水中传播时，遇到悬浮物或分子散射回相机方向的光线，后向散射信号会降低图像质量


![to-ast](/images/posts/shenglei/01/02.png)



#### 03 Method

 

UW-CycleGAN包含两个主要分支：恢复-退化分支和退化-恢复分支。这两个分支将观察到的图像分解为环境变量的组合，这些环境变量在未配对的图像上联合训练，并且每个分支中的相同子网共享相同的权重。

 

1.恢复-退化分支：包含了四个网络，分别是传输估计网络、场景深度估计网络、背景光估计网络和细化网络，恢复-退化分支执行恢复水下图像和退化恢复的干净图像的过程，该过程遵循“水下→干净→水下”的循环过程。


传输估计网络：通过传输估计网络，模型能够精确预测水下图像中的传输图，为后续图像恢复提供了关键的环境变量。


场景深度估计网络：场景深度估计网络进一步估计场景深度信息，有助于模型更好地理解图像的三维结构，从而提升恢复精度。


背景光估计网络：背景光估计网络专注于预测背景光强度，这一步骤对于纠正水下图像中的色偏问题至关重要，是图像恢复不可或缺的一环。


细化网络：通过细化网络，模型不断优化恢复图像的细节，确保最终输出的图像既清晰又自然，接近真实场景。

![to-ast](/images/posts/shenglei/01/03.png)



2.退化-恢复分支：也包含了上述四个网络，该分支执行退化干净图像和恢复模拟水下图像的过程，该过程遵循“干净→水下→干净”的循环过程。

![to-ast](/images/posts/shenglei/01/04.png)



#### 04 Experiments

 1.配对测试样本上评估比较结果


 针对配对测试样本，我们采用PSNR、SSIM和MSE等经典指标，以客观量化评估图像恢复质量与参考图像之间的相似度。

![to-ast](/images/posts/shenglei/01/05.png)


从结果上可以看出UW-CycleGAN展现出卓越性能，其PSNR和SSIM指标均显著优于其他方法，证明了该模型在恢复清晰、准确图像方面的能力。




2.非配对测试样本上评估比较结果


针对非配对测试样本，我们运用UIQM、UCIQE、CCF和FDUM等指标，对恢复图像的视觉质量进行综合评价，确保评估的准确性。

![to-ast](/images/posts/shenglei/01/06.png)


从结果可以看出在非配对测试样本上UW-CycleGAN同样表现出色，在无参考图像评估指标上获得高分，如UIQM和UCIQE等，进一步验证了该模型的有效性和泛化能力。


3.消融实验：

环境损失函数是监督损失函数 Ldepth、LT、Lβ 和 LA 的线性组合，用于指导子网络快速学习和恢复模拟图像，为恢复真实的水下图像提供了良好的基础。在消融实验中，依次引入了损失函数 Ldepth 、 LT 、 Lβ 和 LA ，并在 UIEB 数据集上训练相应的网络模型，以模型 A-D 命名。


![to-ast](/images/posts/shenglei/01/07.png)


从表中可以看出，通过引入监督损失，我们模型的性能得到了显著提高。通过逐步引入监督损失函数 Ldepth 、 LT 、 Lβ 和 LA，所有评价指标都逐步得到改进。

 


#### 结语

作者创新性地推出了UW-CycleGAN模型，该模型专注于水下图像的深度恢复任务，旨在通过先进的算法优化图像质量。
模型采用了一种独特的策略，即将水下图像的退化过程进行细致的分解，从而能够有针对性地解决模糊、低对比度等问题。
通过UW-CycleGAN模型的处理，水下图像的恢复效果得到了显著提升，图像更加清晰、色彩更加饱满，为实际应用提供了有力支持。



