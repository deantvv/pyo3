use crate::ffi::object::*;
use crate::ffi::{PyParser_SimpleParseFileFlags, PyParser_SimpleParseStringFlags};
#[cfg(not(Py_LIMITED_API))]
use libc::FILE;
use std::os::raw::{c_char, c_int};

extern "C" {
    #[cfg(Py_LIMITED_API)]
    #[cfg(not(PyPy))]
    pub fn Py_CompileString(string: *const c_char, p: *const c_char, s: c_int) -> *mut PyObject;

    #[cfg_attr(PyPy, link_name = "PyPyErr_Print")]
    pub fn PyErr_Print();
    #[cfg_attr(PyPy, link_name = "PyPyErr_PrintEx")]
    pub fn PyErr_PrintEx(arg1: c_int);
    #[cfg_attr(PyPy, link_name = "PyPyErr_Display")]
    pub fn PyErr_Display(arg1: *mut PyObject, arg2: *mut PyObject, arg3: *mut PyObject);
}

// skipped PyOS_InputHook

pub const PYOS_STACK_MARGIN: c_int = 2048;

// skipped PyOS_CheckStack under Microsoft C

#[repr(C)]
#[derive(Copy, Clone)]
#[cfg(not(Py_LIMITED_API))]
pub struct PyCompilerFlags {
    pub cf_flags: c_int,
}

#[cfg(Py_LIMITED_API)]
opaque_struct!(PyCompilerFlags);

// will be removed in 3.10
#[cfg(not(Py_LIMITED_API))]
opaque_struct!(_mod);

// will be removed in 3.10
opaque_struct!(symtable);
// will be removed in 3.10
opaque_struct!(_node);

// will be removed in 3.10
#[cfg_attr(Py_3_9, deprecated(note = "Python 3.9"))]
#[inline]
pub unsafe fn PyParser_SimpleParseString(s: *const c_char, b: c_int) -> *mut _node {
    PyParser_SimpleParseStringFlags(s, b, 0)
}

// will be removed in 3.10
#[cfg(not(Py_LIMITED_API))]
#[cfg_attr(Py_3_9, deprecated(note = "Python 3.9"))]
#[inline]
pub unsafe fn PyParser_SimpleParseFile(fp: *mut FILE, s: *const c_char, b: c_int) -> *mut _node {
    PyParser_SimpleParseFileFlags(fp, s, b, 0)
}

extern "C" {
    // will be removed in 3.10
    pub fn Py_SymtableString(
        str: *const c_char,
        filename: *const c_char,
        start: c_int,
    ) -> *mut symtable;
    // will be removed in 3.10
    #[cfg(not(Py_LIMITED_API))]
    pub fn Py_SymtableStringObject(
        str: *const c_char,
        filename: *mut PyObject,
        start: c_int,
    ) -> *mut symtable;
}
