import React, { useState, useEffect } from "react";
import { usePopper } from "react-popper";
import { grey } from "./colors";
import ArrowUpIcon from "./img/ArrowUp";
import ArrowDownIcon from "./img/ArrowDown";
import ArrowLeftIcon from "./img/ArrowLeft";
import ArrowRightIcon from "./img/ArrowRight";
import TrashIcon from "./img/Trash";
import TextIcon from "./Text";
import MultiIcon from "./img/Multi";
import HashIcon from "./img/Hash";
import PlusIcon from "./img/Plus";
import { useDispatch,useSelector } from "react-redux";
import { shortId } from "./utils";
import PropTypes from 'prop-types';
import { addColumnsToRight, addColumsToLeft, updateColumnHeaders, updateColumnsType } from "../store/table/tableThunk";
import PopupModal from "../component/popupModal";
import { getTableInfo } from "../store/table/tableSelector";



export default function Header({
  column: { id, created, label, dataType, getResizerProps, getHeaderProps },
  setSortBy,
  // dispatch:dataDispatch
}) {
  const dispatch = useDispatch();
  const tableInfo=useSelector((state)=>getTableInfo(state));
  console.log("tableInfo",tableInfo)

  // console.log("column",id)
  const [open, setOpen] = useState(false);
  const [variable,setVariable] = useState("");

  const handleOpen = () => {
    setOpen(true);
  }
  
  const createLeftColumn=()=>{
    console.log("columnName",variable)
    console.log(1);
    dispatch(addColumsToLeft({
      columnId: 999999, focus: false,fieldName:variable,dbId:tableInfo?.dbId,tableId:tableInfo?.tableId,fieldType:"text"
    }));
  }

  console.log(open);
  const [expanded, setExpanded] = useState(created || false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [inputRef, setInputRef] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom",
    strategy: "absolute"
  });
  const [header, setHeader] = useState(label);
  const [typeReferenceElement, setTypeReferenceElement] = useState(null);
  const [typePopperElement, setTypePopperElement] = useState(null);
  const [showType, setShowType] = useState(false);
  const buttons = [
    {
      onClick: () => {
        dispatch(updateColumnHeaders({
          type: "updateColumnHeader",
          columnId: id,
          label: header
        }))
        setSortBy([{ id: id, desc: false }]);
        setExpanded(false);
      },
      icon: <ArrowUpIcon />,
      label: "Sort ascending"
    },
    {
      onClick: () => {
        dispatch(updateColumnHeaders({
          type: "updateColumnHeader",
          columnId: id,
          label: header
        }))
        setSortBy([{ id: id, desc: true }]);
        setExpanded(false);
      },
      icon: <ArrowDownIcon />,
      label: "Sort descending"
    },
    {
      onClick: () => {
        console.log("plus")
        dispatch(updateColumnHeaders({
          type: "updateColumnHeader",
          columnId: id,
          label: header
        }))
        // dataDispatch({type: "add_column_to_left", columnId: id, focus: false});
        dispatch(addColumsToLeft({
          columnId: id, focus: false,
        }))
        setExpanded(false);
      },
      icon: <ArrowLeftIcon />,
      label: "Insert left"
    },
    {
      onClick: () => {
        dispatch(updateColumnHeaders({
          type: "updateColumnHeader",
          columnId: id,
          label: header
        }))
        dispatch(addColumnsToRight({
          type: "addColumnToRight",
          columnId: id, focus: false
        }))
        setExpanded(false);
      },
      icon: <ArrowRightIcon />,
      label: "Insert right"
    },
    {
      onClick: () => {
        // dataDispatch({type: "update_column_header", columnId: id, label: header});
        // dispatch(updateColumnHeaders({
        //   type: "updateColumnHeader",
        //   columnId: id,
        //   label: header
        // }))
        // console
        // // dataDispatch({type: "delete_column", columnId: id});
        // dispatch(deleteColumns({
        //   type: "delete_column",
        //   columnId: id
        // }))
        setExpanded(false);
      },
      icon: <TrashIcon />,
      label: "Delete"
    }
  ];

  const types = [
    {
      onClick: () => {
        // dataDispatch({type: "update_column_type", columnId: id, dataType: "select"});
        dispatch(updateColumnsType({
          columnId: id,
          dataType: "select"
        }))
        setShowType(false);
        setExpanded(false);
      },
      icon: <MultiIcon />,
      label: "Select"
    },
    {
      onClick: () => {
        // dataDispatch({type: "update_column_type", columnId: id, dataType: "text"});
        dispatch(updateColumnsType({
          columnId: id,
          dataType: "text"
        }))
        setShowType(false);
        setExpanded(false);
      },
      icon: <TextIcon />,
      label: "Text"
    },
    {
      onClick: () => {
        // dataDispatch({type: "update_column_type", columnId: id, dataType: "number"});
        dispatch(updateColumnsType({
          columnId: id,
          dataType: "number"
        }))
        setShowType(false);
        setExpanded(false);
      },
      icon: <HashIcon />,
      label: "Number"
    }
  ];

  let propertyIcon;
  switch (dataType) {
    case "number":
      propertyIcon = <HashIcon />;
      break;
    case "text":
      propertyIcon = <TextIcon />;
      break;
    case "select":
      propertyIcon = <MultiIcon />;
      break;
    default:
      break;
  }

  useEffect(() => {
    if (created) {
      setExpanded(true);
    }
  }, [created]);

  useEffect(() => {
    setHeader(label);
  }, [label]);

  useEffect(() => {
    if (inputRef) {
      inputRef.focus();
      inputRef.select();
    }
  }, [inputRef]);

  const typePopper = usePopper(typeReferenceElement, typePopperElement, {
    placement: "right",
    strategy: "fixed"
  });

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      dispatch(updateColumnHeaders({
        type: "updateColumnHeader",
        columnId: id,
        label: header
      }))
      setExpanded(false);
    }
  }

  function handleChange(e) {
    setHeader(e.target.value);
  }

  function handleBlur(e) {
    e.preventDefault();
    dispatch(updateColumnHeaders({
      type: "updateColumnHeader",
      columnId: id,
      label: header
    }))
  }

  return id == 999999 || id == 9999991 ? (
    <>

      {id == 999999 ? <div {...getHeaderProps({ style: { display: "inline-block" } })} className='th noselect'>
        <div
          className='th-content'
          style={{ display: "flex", justifyContent: "center" }}
          // onClick={(e) => dataDispatch({type: "add_column_to_left", columnId: 999999, focus: true})}>
          onClick={handleOpen}>
          <span className='svg-icon-sm svg-gray'>
            <PlusIcon />
          </span>
        </div>
    <PopupModal title="create organisation" label="Organization Name" setVariable={setVariable} variable={variable} open={open} setOpen ={setOpen}  submitData={createLeftColumn} />

      </div > :
        <div  {...getHeaderProps({ style: { display: "inline-block" } })} className='th noselect'
          style={{ display: "flex", justifyContent: "center" }}>
          <div
            className='th-content' style={{ paddingLeft: "25px" }}>
            checkbox
          </div>
        </div>}
    </>
  ) : (
    <>
      <div {...getHeaderProps({ style: { display: "inline-block" } })} className='th noselect'>
        <div className='th-content' onClick={() => setExpanded(true)} ref={setReferenceElement}>
          <span className='svg-icon svg-gray icon-margin'>{propertyIcon}</span>
          {label}
        </div>
        <div {...getResizerProps()} className='resizer' />
      </div>
      {expanded && <div className='overlay' onClick={() => setExpanded(false)} />}
      {expanded && (
        <div ref={setPopperElement} style={{ ...styles.popper, zIndex: 3 }} {...attributes.popper}>
          <div
            className='bg-white shadow-5 border-radius-md'
            style={{
              width: 240
            }}>
            <div style={{ paddingTop: "0.75rem", paddingLeft: "0.75rem", paddingRight: "0.75rem" }}>
              <div className='is-fullwidth' style={{ marginBottom: 12 }}>
                <input
                  className='form-input'
                  ref={setInputRef}
                  type='text'
                  value={header}
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <span className='font-weight-600 font-size-75' style={{ textTransform: "uppercase", color: grey(500) }}>
                Property Type
              </span>
            </div>
            <div style={{ padding: "4px 0px" }}>
              <button
                className='sort-button'
                type='button'
                onMouseEnter={() => setShowType(true)}
                onMouseLeave={() => setShowType(false)}
                ref={setTypeReferenceElement}>
                <span className='svg-icon svg-text icon-margin'>{propertyIcon}</span>
                <span style={{ textTransform: "capitalize" }}>{dataType}</span>
              </button>
              {showType && (
                <div
                  className='shadow-5 bg-white border-radius-m'
                  ref={setTypePopperElement}
                  onMouseEnter={() => setShowType(true)}
                  onMouseLeave={() => setShowType(false)}
                  {...typePopper.attributes.popper}
                  style={{
                    ...typePopper.styles.popper,
                    width: 200,
                    backgroundColor: "white",
                    zIndex: 4,
                    padding: "4px 0px"
                  }}>
                  {types.map((type, index) => (
                    <button key={index} className='sort-button' onClick={type.onClick}>
                      <span className='svg-icon svg-text icon-margin'>{type.icon}</span>
                      {type.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div
              key={shortId()}
              style={{
                borderTop: `2px solid ${grey(200)}`,
                padding: "4px 0px"
              }}>
              {buttons.map((button, index) => (
                <button type='button' key={index} className='sort-button' 
                onMouseDown={button.onClick}
                >
                  <span className='svg-icon svg-text icon-margin'>{button.icon}</span>
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>

  );



}

Header.propTypes = {
  column: PropTypes.any,
  setSortBy: PropTypes.any,
  dataDispatch: PropTypes.any
};