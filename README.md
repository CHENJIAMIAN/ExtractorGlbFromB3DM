
# B3DM提取器

- 这是一个用于提取 B3DM 文件内容的专用工具。OGC 3DTiles 使用 B3DM 文件来包装具有特定元数据结构的 gltf/glb 文件。该工具将提取 B3DM 的 gltf/glb 内容。
- 配合[免费的 GLB 资产提取器](https://products.aspose.app/3d/zh-cn/extractor/glb)可提取b3dm文件中的gltf/glb文件的材质图片。

## 批量提取到所在目录

这是一个手动工具，因此您必须执行以下步骤：

1. 在根目录下运行“npm install”
2. 打开文件“src/directory-b3dm.js”并手动更改硬编码路径，使其指向 3DTiles tileset 的根目录或特定的 B3DM 文件。
3. 从根目录运行“node src/directory-b3dm.js”

## 单个提取到所在目录

1. 在根目录下运行“npm install”
2. 打开文件“src/single-b3dm.js”并手动更改硬编码路径，使其指向特定的 B3DM 文件
3. 从根目录运行“node src/single-b3dm.js”

该应用程序将抓取目录和子目录以查找 B3DM 文件并将内容保存在原始文件旁边。

该应用程序不会执行任何额外的工作，例如删除 draco 压缩。Blender 开箱即用地支持 draco 压缩文件。

# 借鉴

 [ebeaufay/B3DMExtractor：从单个 B3DM 文件或整个 3DTiles tileset 中提取 gltf/glb](https://github.com/ebeaufay/B3DMExtractor)
