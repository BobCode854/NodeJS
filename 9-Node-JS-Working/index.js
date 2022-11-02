/**
 *  Three things are there in an Internal Working of Node
 * --------------------------------------------------------------
 *  🥈 Call Stack
 *  🏅 Node API
 *  🏅 CallBackQueue
 *
 * Note :  Method in callBackQueue will never enter into CallStack until main()
 *         method executed its all instructions.
 *
 *
 * 1)  At global level there is one main() method which enter into callStack.
 * 2)  All methods then registered themself into call stack and executed there code.
 * 3)  At every node code at least One method ( main() ) in callStack must be there
 *     but
 *     It is not necessary that for every node code Node APIs or CallBack Queue will present.
 * 
 * 4) Node API will contain methods like setTimeOut(), setInterval() or those methods
 *    whose execution will depend upon API which it belongs to. (setTimeout belongs to C++)
 * 
 * 
 *
 *
 * Express JS is a framework inside NodeJS.
 * Express helps to write less code in Node as well as handling  than usual.
 * 
 *  Install Express
 * -------------------------
 * npm install express --save
 */
