---
layout: post
title: AVCW-MAC：自适应变化竞争窗口MAC 协议
categories: MAC 
description: Huajie Zhang
tags: [MAC]
---

## AVCW-MAC：自适应变化竞争窗口MAC 协议

大家好，本周给大家分享的论文是来自IEEE SENSORS JOURNAL 2023的“Adaptive Varying Contention Window MAC Protocol Based on Underwater Acoustic Propagation Delay”。

这篇论文主要基于竞争窗口MAC(CW-MAC)协议提出AVCW-MAC进行通信性能优化：降低延迟、提高吞吐量和公平性。

论文地址：https://ieeexplore.ieee.org/document/10114670

### 01 Background

随着现代信息技术的进步，对海洋的不断开发和研究，水声传感器网络(UASN)已成为一个热门话题。由于水声信道的特性，传统陆基无线通信网络中使用的 MAC 协议直接的水下应用来说效率低下，甚至无法用于直接水下应用。

这篇论文主要是针对竞争窗口MAC(CW-MAC)协议进行研究。CW-MAC使用预定义的固定值作为当前网络的 CW。

![to-ast](/images/posts/zhanghuajie/01/01.png)

### 02Motivation

争用窗口MAC (CW-MAC)协议应用在水声信道主要存在以下几个问题：

1. 大型网络中，CW-MAC 协议无法保证竞争节点访问通道的公平性。

2. 一旦网络环境发生变化，很容易产生信道拥塞或信道资源浪费，从而影响网络吞吐量。

3. 如下图所示受水下传播时延的影响，导致每个节点传输数据包的传播延迟不同，造成簇头节点R空闲的信道无法及时利用，形成空窗期w，导致信道利用率低。

![to-ast](/images/posts/zhanghuajie/01/02.PNG)
![to-ast](/images/posts/zhanghuajie/01/03.PNG)



论文主要通过下列方法来解决这些问题。

a)使用差异化的 CW 策略以提高通道利用率并减少平均端到端延迟，同时增加网络吞吐量；

b)引入退避因子K1和K2提高信道公平性    



### 03Method

#### 1.差异化CW

AVCW-MAC协议根据每个传感器节点和簇头节点的传播延迟，采用差异化的CW策略，为每个传感器节点设置不同的CW，使得每个节点能够以更“本地化”的方式发送数据包。

**原理：**传感器节点距离簇头节点越近，就越早知道簇头节点空闲的时刻。由于载波传播延迟的差异导致“簇头信道恢复空闲”消息的滞后更短，这些节点可以更快地重新占用信道，从而缩短了窗口期。

**方法：**使靠近簇头的传感器节点采用更积极的发送策略，而距离簇头较远的传感器节点则采用更保守的发送策略。

**实现：**

![to-ast](/images/posts/zhanghuajie/01/04.PNG)

Dave:评价传播延迟 Di:节点传播延迟 CWi:节点竞争窗口 CWopt:基于CW-MAC的最优竞争窗口  K1、K2:退避因子

•    Di<Dave: 传感器节点距离簇头节点较近，应采取相对积极的发送策略，减小当前节点的 CW，以缩短节点的退避时间

•    Di<Dave: 传感器节点距离簇头节点较远，应采取相对积极的发送策略，适当增大当前CW。

#### 2.引入退避因子K1K2

根据退避算法的CW值将信道的工作状态划分（激烈竞争、过渡和竞争缓解），然后根据当前工作状态选择相应的退避因子。大多数退避算法的CW值在[4, 1024]范围内，本文引入两个窗口阈值φ1和φ2进行状态划分。设置φ1和φ2的值分别为32和128。

**状态划分标准:**

当CWopt在[4,φ1]区间时，由于CW较小，节点成功接入信道的概率较大，数据包冲突概率较高。这被称为激烈竞争阶段。

当CWopt在[φ2, 1024]区间时，CW较大，节点接入信道的概率较小。这称为竞争缓和阶段。

当CWopt处于(φ1,φ2)区间时，称为过渡阶段。

![to-ast](/images/posts/zhanghuajie/01/05.PNG)


![to-ast](/images/posts/zhanghuajie/01/06.PNG)

![to-ast](/images/posts/zhanghuajie/01/07.PNG)

![to-ast](/images/posts/zhanghuajie/01/08.PNG)



​     

在设计计算退避因子K1和K2的曲线时应注意以下三点。

1）在激烈竞争阶段，CWopt位于[4，φ1]区间，K1设计为下凹。K2设计为向上凸。由于CWopt趋于接近φ1，K1迅速变大，K2迅速减小，使得较远节点的CW大于较近节点的CW，同时尽量使两者之间的差异不要太大。

2）过渡阶段，CWopt位于（φ1，φ2）区间，令K1=K2=（1/2）。

3）在竞争缓解阶段，当CWopt位于[φ2, 1024]区间时，K1设计为向上凸，K2设计为向下凹。当CWopt趋于1024，即CW较大时，[1−K1·(Dave−Di)/Dave]和[1+K2·(Di−Dave)/Dave]的小波动会导致整体CW的较大波动。因此，K1缓慢上升，K2缓慢下降，使得较远节点的CW大于较近节点的CW，同时尽量使两者之间的差异不要太大。

### 04 Simulation

![to-ast](/images/posts/zhanghuajie/01/09.png)
![to-ast](/images/posts/zhanghuajie/01/10.png)

模拟常规 CW-MAC 协议，在具有 20 个节点的准静态 UASN 中使用 CW-MAC 协议。得到在CW=143 时可以得到最大网络吞吐量和最低丢包率。最优CWopt=143

![to-ast](/images/posts/zhanghuajie/01/11.png)
![to-ast](/images/posts/zhanghuajie/01/12.png)

结果表明，与传统的CW-MAC协议相比，AVCW-MAC协议的性能要好得多;网络吞吐量提高了约 13.7%，平均端到端延迟降低了约 27.3%。

降低了水声通信过程中的数据包冲突率，提高了水声通信的信道利用率和可靠性。

 

### 05 Conclusion

在准静态 UASN 中，AVCW 随机回退机制根据每个节点到簇头节点的传播延迟对每个节点的 CW 设置不同，并且还引入了退避因子K1 和K2 。在这种机制中，保证每个节点的 CW 不会相差太大，从而提高网络中每个节点的通道访问公平性。

 

不足：

1.该论文是基于准静态的传感器网络，但实际上传感器节点所部署的是动态水声传感器网络中。没有考虑到考虑了包括洋流、船舶噪声以及温度和深度差异在内的因素。

2.对提到的公平性问题没有实验数据证明。

 

 