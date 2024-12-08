---
layout: post
title: An Efficient Localization Scheme with Velocity Prediction for Large-Scale Underwater Acoustic Sensor Networks
categories: Paper
description: Zhichao Tang
tags: [Paper]
---

### An Efficient Localization Scheme with Velocity Prediction for Large-Scale Underwater Acoustic Sensor Networks


大家好，本周给大家分享的论文是来自IEEE Internet of Things Journal的“An Efficient Localization Scheme with Velocity Prediction for Large-Scale Underwater Acoustic Sensor Networks”。

 

这篇论文提出一种新的定位机制LSVP以改进定位中的能耗问题和定位误差问题

 

论文地址：https://ieeexplore.ieee.org/document/10239264

  

#### 01 Background

水下声学传感器网络（UASNs）的定位至关重要。然而，现有的定位方法多假设小规模场景且无电池能量约束，不适用于大规模UASNs。在大规模UASNs中，定位面临着能量消耗过大和定位误差大的挑战，这是由于节点移动性和巨大的测距误差等恶劣水下条件导致的。为解决这些挑战，作者提出一种带有速度预测的高效定位方案（LSVP）。该方案将节点移动性、测距误差和能量平衡纳入统一框架，适用于现实且可扩展的UASNs。通过设计多普勒辅助速度预测（DVP）算法减少能量消耗，解决洋流中节点移动导致的过度通信问题；提出基于置信度的迭代定位算法减少定位误差，降低位置不确定性和测距误差引起的误差传播。


![to-ast](/images/posts/tangzhichao/01/01.png)

 

 

#### 02 Motivation

  在水下应用的推动下，UASN 的规模不断扩大（从几十个节点到几百个节点）。因此，针对大规模静态场景的各种定位方案应运而生。这些方案采用迭代策略来提高定位率。然而，上述方法并不适用于大多数传感器节点都是自由漂浮并随洋流漂移的实际场景。因此，有人提出了一些适用于大规模移动场景的算法。虽然上述定位方案取得了很好的效果，但对于大规模移动 UASN，我们仍然面临以下两个挑战。

能量约束:水下传感器节点受电池容量限制，定位过程中通信能耗远高于计算能耗，节点受海流驱动不断移动，传统定位算法高频通信更新位置信息会极大增加能耗。


定位误差：定位不确定性方面，传感器节点接收定位消息时，由于声速动态变化导致测距误差，选择不同参考节点会有不同定位结果。误差传播方面，大规模UASNs定位是迭代过程，已定位节点的定位误差会传播和累积到后续节点。

![to-ast](/images/posts/tangzhichao/01/02.png)



#### 03 Method

 

 1.多普勒辅助速度预测（DVP）算法：通过发送端特殊前导和接收端多分支并行自相关器合作完成多普勒比例因子估计，结合卡尔曼滤波得到高精度速度信息，用于节点速度预测。

 

多普勒比例因子估计:通过多普勒比例因子估计得到相对速度。多普勒比例因子估计是由发送端特殊的前导和接收端的多支路并行自相关器共同完成的。


节点速度预测：通过三个参考节点的相对速度估算节点 i 的速度。

![to-ast](/images/posts/tangzhichao/01/03.png)



2.基于置信度的迭代定位（CIL）算法：普通节点先优化参考节点减少定位不确定性，计算置信值，根据其是否高于阈值决定能否作为伪参考节点辅助其他节点定位。


几何精度稀释系数（GDOP）：可用于评估几何关系对定位精度的影响 。GDOP 值越小，定位的不确定性就越小。

置信度值：评估定位节点作为新参考节点的可靠性，该可靠性反映了自定位的质量、参考节点的位置误差和剩余能量

![to-ast](/images/posts/tangzhichao/01/04.png)



#### 04 Experiments

 1.速度估计结果

![to-ast](/images/posts/tangzhichao/01/05.png)


我们比较了本文中的 DVP 算法和 SLMP 中基于位置的速度估计算法。X(Y) 轴上的真实速度被记录为真实值。从图 7（a）和（b）中可以看出，与 SLMP 相比，我们的方法更接近真实速度，这意味着在 X 轴和 Y 轴上的精度都很高。

 

2.速度预测结果

![to-ast](/images/posts/tangzhichao/01/06.png)


  将本文中的速度预测误差与 SLMP 算法中的速度预测误差进行比较，分别记为 DVP 和 SLMP。从图 8 中可以看出，本文算法在 X 轴和 Y 轴上的速度预测比 SLMP 算法更为精确。


3.参考节点优化结果：

我们模拟比较了四种不同的方案，包括 LSVP、随机选择、SLMP 和 ULES。仿真结果表明，LSVP 算法在三角形部署、网格部署和随机部署三种情况下都有较好的定位精度，尤其是在信标节点随机部署的情况下。


![to-ast](/images/posts/tangzhichao/01/07.png)


LSVP 的 ALE 明显低于其他方案，尤其是在信标节点随机部署的情况下。这是因为三角形和网格部署的信标节点具有规则的几何关系，而随机部署的信标节点在没有参考节点优化机制的情况下会带来较大的定位误差。


![to-ast](/images/posts/tangzhichao/01/08.png)


实验结果表明，ALE 随通信距离的增加而增加。

 

 

4. 迭代定位的结果

![to-ast](/images/posts/tangzhichao/01/09.png)




![to-ast](/images/posts/tangzhichao/01/10.png)


仿真结果验证了置信度值 η 的必要性和 LSVP 算法的良好性能。

 


5.LSVP结果 

![to-ast](/images/posts/tangzhichao/01/11.png)



与SLMP和ULES相比，LSVP具有更高的节点存活率

 


#### 结语

在LSVP方案中，锚节点和普通节点都能完成实时定位和位置预测。锚节点基于DVP算法预测移动模式，可实现高精度、低能耗的位置预测；普通节点的CIL算法能提高定位精度并减轻误差传播。模拟结果表明，LSVP在保持高精度定位的同时，可最小化通信成本并延长网络寿命。

 

 