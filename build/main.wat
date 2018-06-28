(module
 (type $v (func))
 (type $i (func (result i32)))
 (type $iiv (func (param i32 i32)))
 (type $ii (func (param i32) (result i32)))
 (type $iiiv (func (param i32 i32 i32)))
 (type $iv (func (param i32)))
 (import "ethereum" "getCallDataSize" (func $~lib/ethereum/getCallDataSize (result i32)))
 (import "ethereum" "revert" (func $~lib/ethereum/revert (param i32 i32)))
 (import "ethereum" "callDataCopy" (func $~lib/ethereum/callDataCopy (param i32 i32 i32)))
 (import "ethereum" "storageLoad" (func $~lib/ethereum/storageLoad (param i32 i32)))
 (import "ethereum" "return" (func $~lib/ethereum/finish (param i32 i32)))
 (import "ethereum" "getCaller" (func $~lib/ethereum/getCaller (param i32)))
 (import "ethereum" "storageStore" (func $~lib/ethereum/storageStore (param i32 i32)))
 (global $~lib/allocator/arena/startOffset (mut i32) (i32.const 0))
 (global $~lib/allocator/arena/offset (mut i32) (i32.const 0))
 (global $~started (mut i32) (i32.const 0))
 (global $HEAP_BASE i32 (i32.const 8))
 (memory $0 0)
 (export "main" (func $main/main))
 (export "memory" (memory $0))
 (func $~lib/allocator/arena/allocate_memory (; 7 ;) (type $ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  ;;@ ~lib/allocator/arena.ts:17:2
  (if
   ;;@ ~lib/allocator/arena.ts:17:6
   (get_local $0)
   ;;@ ~lib/allocator/arena.ts:17:12
   (block
    ;;@ ~lib/allocator/arena.ts:18:4
    (if
     ;;@ ~lib/allocator/arena.ts:18:8
     (i32.gt_u
      (get_local $0)
      ;;@ ~lib/allocator/arena.ts:18:15
      (i32.const 1073741824)
     )
     ;;@ ~lib/allocator/arena.ts:18:28
     (unreachable)
    )
    ;;@ ~lib/allocator/arena.ts:22:4
    (if
     ;;@ ~lib/allocator/arena.ts:22:8
     (i32.gt_u
      ;;@ ~lib/allocator/arena.ts:20:4
      (tee_local $0
       ;;@ ~lib/allocator/arena.ts:20:17
       (i32.and
        (i32.add
         ;;@ ~lib/allocator/arena.ts:20:18
         (i32.add
          ;;@ ~lib/allocator/arena.ts:19:4
          (tee_local $1
           ;;@ ~lib/allocator/arena.ts:19:14
           (get_global $~lib/allocator/arena/offset)
          )
          ;;@ ~lib/allocator/arena.ts:20:24
          (get_local $0)
         )
         ;;@ ~lib/allocator/arena.ts:20:31
         (i32.const 7)
        )
        (i32.const -8)
       )
      )
      ;;@ ~lib/allocator/arena.ts:22:17
      (i32.shl
       ;;@ ~lib/allocator/arena.ts:21:4
       (tee_local $2
        ;;@ ~lib/allocator/arena.ts:21:22
        (current_memory)
       )
       ;;@ ~lib/allocator/arena.ts:22:39
       (i32.const 16)
      )
     )
     ;;@ ~lib/allocator/arena.ts:25:6
     (if
      ;;@ ~lib/allocator/arena.ts:25:10
      (i32.lt_s
       (grow_memory
        ;;@ ~lib/allocator/arena.ts:24:24
        (select
         ;;@ ~lib/allocator/arena.ts:24:28
         (get_local $2)
         (tee_local $4
          ;;@ ~lib/allocator/arena.ts:23:6
          (tee_local $3
           ;;@ ~lib/allocator/arena.ts:23:24
           (i32.shr_u
            (i32.and
             ;;@ ~lib/allocator/arena.ts:23:25
             (i32.add
              ;;@ ~lib/allocator/arena.ts:23:26
              (i32.sub
               (get_local $0)
               ;;@ ~lib/allocator/arena.ts:23:35
               (get_local $1)
              )
              ;;@ ~lib/allocator/arena.ts:23:41
              (i32.const 65535)
             )
             (i32.const -65536)
            )
            ;;@ ~lib/allocator/arena.ts:23:64
            (i32.const 16)
           )
          )
         )
         (i32.gt_s
          (get_local $2)
          (get_local $4)
         )
        )
       )
       ;;@ ~lib/allocator/arena.ts:25:37
       (i32.const 0)
      )
      ;;@ ~lib/allocator/arena.ts:25:40
      (if
       ;;@ ~lib/allocator/arena.ts:26:12
       (i32.lt_s
        (grow_memory
         ;;@ ~lib/allocator/arena.ts:26:24
         (get_local $3)
        )
        ;;@ ~lib/allocator/arena.ts:26:39
        (i32.const 0)
       )
       ;;@ ~lib/allocator/arena.ts:26:42
       (unreachable)
      )
     )
    )
    ;;@ ~lib/allocator/arena.ts:31:4
    (set_global $~lib/allocator/arena/offset
     ;;@ ~lib/allocator/arena.ts:31:13
     (get_local $0)
    )
    ;;@ ~lib/allocator/arena.ts:32:11
    (return
     (get_local $1)
    )
   )
  )
  ;;@ ~lib/allocator/arena.ts:34:9
  (i32.const 0)
 )
 (func $main/do_balance (; 8 ;) (type $v)
  (local $0 i32)
  ;;@ main.ts:28:2
  (if
   ;;@ main.ts:28:6
   (i32.ne
    (call $~lib/ethereum/getCallDataSize)
    ;;@ main.ts:28:28
    (i32.const 24)
   )
   ;;@ main.ts:29:4
   (call $~lib/ethereum/revert
    ;;@ main.ts:29:11
    (i32.const 0)
    ;;@ main.ts:29:14
    (i32.const 0)
   )
  )
  ;;@ main.ts:32:2
  (call $~lib/ethereum/callDataCopy
   ;;@ main.ts:31:2
   (tee_local $0
    ;;@ main.ts:31:19
    (call $~lib/allocator/arena/allocate_memory
     ;;@ main.ts:31:40
     (i32.const 20)
    )
   )
   ;;@ main.ts:32:27
   (i32.const 4)
   ;;@ main.ts:32:30
   (i32.const 20)
  )
  ;;@ main.ts:34:2
  (call $~lib/ethereum/storageLoad
   ;;@ main.ts:34:14
   (get_local $0)
   ;;@ main.ts:33:2
   (tee_local $0
    ;;@ main.ts:33:19
    (call $~lib/allocator/arena/allocate_memory
     ;;@ main.ts:33:40
     (i32.const 32)
    )
   )
  )
  ;;@ main.ts:39:2
  (call $~lib/ethereum/finish
   ;;@ main.ts:39:9
   (get_local $0)
   ;;@ main.ts:39:21
   (i32.const 32)
  )
 )
 (func $main/do_transfer (; 9 ;) (type $v)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  ;;@ main.ts:43:2
  (if
   ;;@ main.ts:43:6
   (i32.ne
    (call $~lib/ethereum/getCallDataSize)
    ;;@ main.ts:43:28
    (i32.const 32)
   )
   ;;@ main.ts:44:4
   (call $~lib/ethereum/revert
    ;;@ main.ts:44:11
    (i32.const 0)
    ;;@ main.ts:44:14
    (i32.const 0)
   )
  )
  ;;@ main.ts:47:2
  (call $~lib/ethereum/getCaller
   ;;@ main.ts:46:2
   (tee_local $3
    ;;@ main.ts:46:18
    (call $~lib/allocator/arena/allocate_memory
     ;;@ main.ts:46:39
     (i32.const 32)
    )
   )
  )
  ;;@ main.ts:49:2
  (call $~lib/ethereum/callDataCopy
   ;;@ main.ts:48:2
   (tee_local $4
    ;;@ main.ts:48:21
    (call $~lib/allocator/arena/allocate_memory
     ;;@ main.ts:48:42
     (i32.const 32)
    )
   )
   ;;@ main.ts:49:29
   (i32.const 4)
   ;;@ main.ts:49:32
   (i32.const 20)
  )
  ;;@ main.ts:51:2
  (call $~lib/ethereum/callDataCopy
   ;;@ main.ts:50:2
   (tee_local $0
    ;;@ main.ts:50:17
    (call $~lib/allocator/arena/allocate_memory
     ;;@ main.ts:50:38
     (i32.const 32)
    )
   )
   ;;@ main.ts:51:25
   (i32.const 24)
   ;;@ main.ts:51:29
   (i32.const 8)
  )
  ;;@ main.ts:53:2
  (set_local $1
   ;;@ main.ts:53:25
   (call $~lib/allocator/arena/allocate_memory
    ;;@ main.ts:53:46
    (i32.const 32)
   )
  )
  ;;@ main.ts:54:2
  (set_local $2
   ;;@ main.ts:54:28
   (call $~lib/allocator/arena/allocate_memory
    ;;@ main.ts:54:49
    (i32.const 32)
   )
  )
  ;;@ main.ts:55:2
  (call $~lib/ethereum/storageLoad
   ;;@ main.ts:55:14
   (get_local $3)
   ;;@ main.ts:55:25
   (get_local $1)
  )
  ;;@ main.ts:56:2
  (call $~lib/ethereum/storageLoad
   ;;@ main.ts:56:14
   (get_local $4)
   ;;@ main.ts:56:28
   (get_local $2)
  )
  ;;@ main.ts:64:2
  (set_local $5
   ;;@ main.ts:64:25
   (i32.load
    ;;@ main.ts:64:35
    (get_local $2)
   )
  )
  ;;@ main.ts:67:2
  (if
   ;;@ main.ts:67:6
   (i32.lt_s
    ;;@ main.ts:63:2
    (tee_local $6
     ;;@ main.ts:63:22
     (i32.load
      ;;@ main.ts:63:32
      (get_local $1)
     )
    )
    ;;@ main.ts:65:2
    (tee_local $0
     ;;@ main.ts:65:14
     (i32.load
      ;;@ main.ts:65:24
      (get_local $0)
     )
    )
   )
   ;;@ main.ts:68:4
   (call $~lib/ethereum/revert
    ;;@ main.ts:68:11
    (i32.const 0)
    ;;@ main.ts:68:14
    (i32.const 0)
   )
  )
  ;;@ main.ts:70:2
  (i32.store
   ;;@ main.ts:70:13
   (get_local $1)
   ;;@ main.ts:70:31
   (i32.sub
    (get_local $6)
    ;;@ main.ts:70:47
    (get_local $0)
   )
  )
  ;;@ main.ts:71:2
  (i32.store
   ;;@ main.ts:71:13
   (get_local $2)
   ;;@ main.ts:71:34
   (i32.add
    (get_local $5)
    ;;@ main.ts:71:53
    (get_local $0)
   )
  )
  ;;@ main.ts:72:2
  (call $~lib/ethereum/storageStore
   ;;@ main.ts:72:15
   (get_local $3)
   ;;@ main.ts:72:26
   (get_local $1)
  )
  ;;@ main.ts:73:2
  (call $~lib/ethereum/storageStore
   ;;@ main.ts:73:15
   (get_local $4)
   ;;@ main.ts:73:29
   (get_local $2)
  )
 )
 (func $main/main (; 10 ;) (type $v)
  (local $0 i32)
  (if
   (i32.eqz
    (get_global $~started)
   )
   (block
    (call $start)
    (set_global $~started
     (i32.const 1)
    )
   )
  )
  ;;@ main.ts:9:2
  (if
   ;;@ main.ts:9:6
   (i32.lt_s
    (call $~lib/ethereum/getCallDataSize)
    ;;@ main.ts:9:26
    (i32.const 4)
   )
   ;;@ main.ts:10:4
   (call $~lib/ethereum/revert
    ;;@ main.ts:10:11
    (i32.const 0)
    ;;@ main.ts:10:14
    (i32.const 0)
   )
  )
  ;;@ main.ts:13:2
  (call $~lib/ethereum/callDataCopy
   ;;@ main.ts:12:2
   (tee_local $0
    ;;@ main.ts:12:20
    (call $~lib/allocator/arena/allocate_memory
     ;;@ main.ts:12:41
     (i32.const 4)
    )
   )
   ;;@ main.ts:13:28
   (i32.const 0)
   ;;@ main.ts:13:31
   (i32.const 4)
  )
  ;;@ main.ts:15:2
  (block $break|0
   (block $case2|0
    (block $case1|0
     (if
      (i32.ne
       (tee_local $0
        ;;@ main.ts:14:17
        (i32.load
         ;;@ main.ts:14:27
         (get_local $0)
        )
       )
       ;;@ main.ts:16:9
       (i32.const -1718418918)
      )
      (block
       (br_if $case1|0
        (i32.eq
         (get_local $0)
         ;;@ main.ts:19:9
         (i32.const 1563795389)
        )
       )
       (br $case2|0)
      )
     )
     ;;@ main.ts:17:6
     (call $main/do_balance)
     ;;@ main.ts:18:6
     (br $break|0)
    )
    ;;@ main.ts:20:6
    (call $main/do_transfer)
    ;;@ main.ts:21:6
    (br $break|0)
   )
   ;;@ main.ts:23:6
   (call $~lib/ethereum/revert
    ;;@ main.ts:23:13
    (i32.const 0)
    ;;@ main.ts:23:16
    (i32.const 0)
   )
  )
 )
 (func $start (; 11 ;) (type $v)
  (set_global $~lib/allocator/arena/startOffset
   (i32.and
    (i32.add
     (get_global $HEAP_BASE)
     (i32.const 7)
    )
    (i32.const -8)
   )
  )
  (set_global $~lib/allocator/arena/offset
   (get_global $~lib/allocator/arena/startOffset)
  )
 )
)
