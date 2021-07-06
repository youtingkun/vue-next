// 节点类型，采用位运算符标识
export const enum ShapeFlags {
  // html 或 svg 标签，1
  ELEMENT = 1,
  // 函数式组件，2
  FUNCTIONAL_COMPONENT = 1 << 1,
  // 普通有状态组件，4
  STATEFUL_COMPONENT = 1 << 2,
  // 子节点是纯文本，8
  TEXT_CHILDREN = 1 << 3,
  // 子节点是数组，16
  ARRAY_CHILDREN = 1 << 4,
  // 子节点是 slots，32
  SLOTS_CHILDREN = 1 << 5,
  // Portal，64
  TELEPORT = 1 << 6,
  // Suspense，128
  SUSPENSE = 1 << 7,
  // 需要被keepAlive的有状态组件，256
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  // 已经被keepAlive的有状态组件，512
  COMPONENT_KEPT_ALIVE = 1 << 9,
  // 有状态组件和函数式组件都是“组件”，用 COMPONENT 表示
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}
